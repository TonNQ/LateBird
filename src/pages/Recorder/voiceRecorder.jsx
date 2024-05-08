import React, { useState } from "react";

const VoiceRecorder = () => {
  const [recording, setRecording] = useState(false);
  const [audioChunks, setAudioChunks] = useState([]);
  let mediaRecorder;

  const startRecording = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.addEventListener("dataavailable", handleDataAvailable);
        mediaRecorder.start();
        setRecording(true);
      })
      .catch((error) => {
        console.error("Error accessing microphone:", error);
      });
  };

  const stopRecording = () => {
    if (mediaRecorder && recording) {
      mediaRecorder.stop();
      setRecording(false);
    }
  };

  const handleDataAvailable = (event) => {
    if (event.data.size > 0) {
      setAudioChunks((chunks) => [...chunks, event.data]);
    }
  };

  const saveRecording = () => {
    if (audioChunks.length === 0) {
      console.warn("No audio data recorded.");
      return;
    }

    const blob = new Blob(audioChunks, { type: "audio/webm" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "recording.webm";
    link.click();
  };

  return (
    <div>
      <button onClick={startRecording} >
        
        Start Recording

      </button>
      <button onClick={stopRecording} >
        Stop Recording
      </button>
      <button onClick={saveRecording} >
        Save Recording
      </button>
    </div>
  );
};

export default VoiceRecorder;