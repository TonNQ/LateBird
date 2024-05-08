import React, { useState } from "react";
import { ReactMic } from "react-mic";
import VoiceRecorder from "./voiceRecorder";
import ReactAudioRecorder from "react-audio-recorder";
import { set } from "lodash";

export default function App() {
  const [record, setRecord] = useState(false);
  const [myAudioSrc, setMyAudioSrc] = useState(null);
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = () => {
    setRecord(true);
  };

  const stopRecording = () => {
    setRecord(false);
  };

  const onData = (recordedBlob) => {
    console.log("chunk of real-time data is: ", recordedBlob);
  };

  const onStop = async (recordedBlob) => {
    console.log("recordedBlob is: ", recordedBlob);
    const audioSrc = URL.createObjectURL(recordedBlob.blob);
    setMyAudioSrc(audioSrc);
    const API = "http://localhost:3000/speech/pronunciation";
    const formData = new FormData();
    formData.append("stream", recordedBlob.blob);
    formData.append("text", "con kiến cắn con cá chết con voi ");

    const response = await fetch(API, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    console.log(data);
    



  };

  const startAudioRecording = () => {
    setIsRecording(true);
  };

  const stopAudioRecording = () => {
    setIsRecording(false);
  };

  const onAudioStop = (audioData) => {
    console.log("Audio data:", audioData);
  };

  return (
    <div className="App">
      <div>
        <h1>Voice Recorder React-mic Plugin</h1>
        <ReactMic
          record={record}
          onStop={onStop}
          onData={onData}
          visualSetting="sinewave"
        />
        <div>
          <button onClick={startRecording} type="button">
            Start
          </button>
          <button onClick={stopRecording} type="button">
            Stop
          </button>
        </div>
        <br />
        <audio controls id="myAudio" src={myAudioSrc}></audio>
      </div>
    </div>
  );
}