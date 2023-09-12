import './App.css';
import { useState } from 'react';
function App() {
  const [hori, setHori] = useState(10);
  const [vert, setVert] = useState(10);
  const [blur, setBlur] = useState(10);
  const [color, setColor] = useState("black");
  const [checkOn, setCheckOn] = useState(false);
  return (
    <div className="App">
      <div className="controls">
        <label htmlFor="">Horizontal length</label>
        <input type="range" min="-200" max="200" value={hori} onChange={(e) => setHori(e.target.value)} />
        <label htmlFor="">Vertical length</label>
        <input type="range" min="-200" max="200" value={vert} onChange={(e) => setVert(e.target.value)} />
        <label htmlFor="">Blur</label>
        <input type="range" min="0" max="200" value={blur} onChange={(e) => setBlur(e.target.value)} />
        <label htmlFor="">color</label>
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        <div className="switch">
          <label>
            Inset
            <input type="checkbox" checked={checkOn} onChange={(e) => setCheckOn(!checkOn)} />
            <span className="lever"></span>
            Outset
          </label>
        </div>
      </div>
      <div className="output">
        <div className="box" style={{
          boxShadow: `${checkOn ? "inset" : ""} ${hori}px ${vert}px ${blur}px ${color}`
        }}>
          <p>box-shadow:{hori}px {vert}px {blur}px {color}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
