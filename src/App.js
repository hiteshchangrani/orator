import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import AWS from 'aws-sdk';
import AudioPlayer from './components/AudioPlayer';

AWS.config.update({
  accessKeyId: process.env.REACT_APP_ACCESS_KEY,
  secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
  region: process.env.REACT_APP_REGION,
});

const polly = new AWS.Polly();

function App() {
  const [text, setText] = useState('');
  const [audioFile, setAudioFile] = useState();
  const [voice, setVoice] = useState('Salli'); // Default voice

  const convertTextToSpeech = () => {
    polly.synthesizeSpeech(
      {
        Text: text,
        OutputFormat: 'mp3',
        VoiceId: voice,
      },
      (error, data) => {
        if (error) {
          console.log(error);
        } else {
          setAudioFile(data);
        }
      }
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-100 to-green-300">
      <Header />
      <center>
        <Body
          text={text}
          setText={setText}
          convertTextToSpeech={convertTextToSpeech}
          voice={voice}
          setVoice={setVoice}
        />
        <div className="w-full flex justify-center p-6">
          <AudioPlayer audioFile={audioFile} />
        </div>
      </center>
    </div>
  );
}

export default App;
