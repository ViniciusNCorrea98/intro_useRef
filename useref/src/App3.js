import './App.css';
import {useRef} from 'react'

const musicUrl = '.........................';

function App() {
  const audioRef = useRef(null);

  function handlePause(){
    audioRef.current.pause();
  }

  function handlePlay(){
    audioRef.current.play();
  }

  function handleStop(){
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  }
  return (
    <div className="App">
      <audio src={musicUrl} ref={audioRef}/>
      <div>
        <button onClick= {() => handlePlay()}>Play</button>
        <button onClick= {() => handlePause()}>Pause</button>
        <button onClick= {() => handleStop()}>Stop</button>
      </div>
    </div>
  );
}

export default App;