import './App.css';
import { useRef } from 'react'

function App() {
  let count = 0;
  const countRef = useRef(0);
  const spanRef =useRef(null)
  const spanLetRef =useRef(null)

  function incrementarLet(){
    count++;
    spanLetRef.current.innerText = count;
  }

  function incrementarRef(){
    countRef.current++;
    spanRef.current.innerText = countRef.current;
  }

  return (
    <div className="App" style={{gap: '10px'}}>
      
      <div>
        <button onClick={() => incrementarRef()}>
          Incrementar useRef
        </button>
        <div>
          <strong style={{marginRight: '10px'}}>
            Valor do useRef
          </strong>
          <span  ref={spanRef}>{countRef.current}</span>
        </div>
      </div>
      <div>
        <button onClick={() => incrementarLet()}>Incrementar let</button>
        <div>
          <strong style={{marginRight: '10px'}}>
            Valor do let
          </strong>
          <span ref={spanLetRef}>{count}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
