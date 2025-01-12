function Body({ text, setText, convertTextToSpeech, voice, setVoice }) {
    return (
      <div className="flex flex-col p-6 w-5/6 bg-gradient-to-r from-blue-50 to-blue-200 shadow-lg rounded-lg mt-4">
        <div className="w-full">
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-green-700">Select Voice:</label>
            <label className="mr-4">
              <input
                type="radio"
                name="voice"
                value="Matthew"
                checked={voice === "Matthew"}
                onChange={(e) => setVoice(e.target.value)}
                className="mr-2"
              />
              Male (Matthew)
            </label>
            <label className="mr-4">
              <input
                type="radio"
                name="voice"
                value="Salli"
                checked={voice === "Salli"}
                onChange={(e) => setVoice(e.target.value)}
                className="mr-2"
              />
              Female (Salli)
            </label>
            <label className="mr-4">
              <input
                type="radio"
                name="voice"
                value="Joey"
                checked={voice === "Joey"}
                onChange={(e) => setVoice(e.target.value)}
                className="mr-2"
              />
              Male (Joey)
            </label>
            <label>
              <input
                type="radio"
                name="voice"
                value="Ivy"
                checked={voice === "Ivy"}
                onChange={(e) => setVoice(e.target.value)}
                className="mr-2"
              />
              Female (Ivy)
            </label>
            <p className="mt-4 font-semibold text-gray-700">
          Selected Voice: <span className="text-blue-600">{voice}</span>
        </p>
          </div>
          <textarea
            className="w-full h-40 p-3 border-2 border-green-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 bg-white"
            placeholder="Type your text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="mt-4 w-full px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-md hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
            onClick={convertTextToSpeech}
          >
            Convert Text to Speech
          </button>
        </div>
      </div>
    );
  }
  
  export default Body;
  