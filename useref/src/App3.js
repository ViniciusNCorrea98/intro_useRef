import './App.css';
import {useRef} from 'react'
import Controls from './components/Controls/index'

const musicUrl = '.........................';

function App() {
  const audioRef = useRef(null);

  
  return (
    <div className="App">
      <audio src={musicUrl} ref={audioRef}/>
      <Controls audioRef={audioRef}/>
    </div>
  );
}

export default App;