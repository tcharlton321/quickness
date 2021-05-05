import React, { useState } from 'react';
import './App.css';

function App() {
  const [qbtn, setButton] = useState({
    score: 0,
    x_coord: 50,
    y_coord: 50,
  });

  const [xpos, setXpos] = useState(qbtn.x_coord);
  const [ypos, setYpos] = useState(qbtn.y_coord);
  const [trans, setTrans] = useState(0);

  const modifyScore = (n: number) => {
    const newBtn = ({
      score: qbtn.score + n,
      x_coord: qbtn.x_coord,
      y_coord: qbtn.y_coord, });
      setButton(newBtn);
  }

  const modifyCoordinates = () => {
    setXpos(Math.random() * 95);
    setYpos(Math.random() * 95);
}

  return (
    <div className="App">
      <button
          style={{left: xpos+'%', top: ypos+'%'}}
          type="button"
          className="qbtn"
          onClick={e => {
              e.preventDefault();
              modifyScore(1);
          }}
          onMouseEnter={e => {
              e.preventDefault();
              modifyCoordinates();
              }}
              
          >
          {qbtn.score}
      </button>
    </div>
  );
}

export default App;
