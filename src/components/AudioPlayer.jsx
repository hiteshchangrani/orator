import React, { useEffect, useRef, useState } from 'react';
import { CgPlayPauseR } from "react-icons/cg";
import { LuSquarePlay } from "react-icons/lu";
import { HiOutlineFolderDownload } from "react-icons/hi";

function AudioPlayer({ audioFile }) {
  const audioRef = useRef();
  const progressBarRef = useRef();

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (audioFile) {
      const audioArrayBuffer = audioFile.AudioStream.buffer;
      const audioURL = URL.createObjectURL(new Blob([audioArrayBuffer], { type: "audio/mpeg" }));

      const audio = audioRef.current;
      audio.src = audioURL;

      audio.addEventListener('loadeddata', () => {
        setDuration(audio.duration);
      });
      audio.addEventListener('timeupdate', updateProgressBar);
      audio.addEventListener('ended', handleAudioEnded); // Add listener for 'ended' event

      return () => {
        audio.removeEventListener('timeupdate', updateProgressBar);
        audio.removeEventListener('ended', handleAudioEnded);
        URL.revokeObjectURL(audioURL);
      };
    }
  }, [audioFile]);

  const updateProgressBar = () => {
    const audio = audioRef.current;
    const progress = (audio.currentTime / audio.duration) * 100;

    setCurrentTime(audio.currentTime);
    progressBarRef.current.style.width = `${progress}%`;
  };

  const handleAudioEnded = () => {
    
    setIsPlaying(false); // Reset to play button when audio ends
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const downloadAudio = () => {
    if (audioFile) {
      const audioArrayBuffer = audioFile.AudioStream.buffer;
      const audioURL = URL.createObjectURL(new Blob([audioArrayBuffer], { type: "audio/mpeg" }));

      const a = document.createElement('a');
      a.href = audioURL;

      a.download = "audio.mp3";
      a.style.display = "none";
      document.body.appendChild(a);

      a.click();

      document.body.removeChild(a);
      URL.revokeObjectURL(audioURL);
    }
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-md w-4/6">
      <audio ref={audioRef} />
      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
        <div
          ref={progressBarRef}
          className="bg-blue-500 h-2 rounded-full"
          style={{ width: `${(currentTime / duration) * 100}%` }}
        />
      </div>
      <div className="flex items-center justify-center mt-2 space-x-4">
        {isPlaying ? (
          <button
            className="text-3xl text-blue-700 hover:text-blue-900 focus:outline-none"
            onClick={togglePlay}
            disabled={!audioFile}
          >
            <CgPlayPauseR />
          </button>
        ) : (
          <button
            className="text-3xl text-blue-700 hover:text-blue-900 focus:outline-none"
            onClick={togglePlay}
            disabled={!audioFile}
          >
            <LuSquarePlay />
          </button>
        )}
        <button
          className="text-3xl text-green-700 hover:text-green-900 focus:outline-none"
          onClick={downloadAudio}
          disabled={!audioFile}
        >
          <HiOutlineFolderDownload />
        </button>
      </div>
    </div>
  );
}

export default AudioPlayer;
