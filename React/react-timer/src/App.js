import React, { useState } from 'react';

function Timer() {
  const [countdownDuration, setCountdownDuration] = useState(0);
  const [timerDisplay, setTimerDisplay] = useState('');

  const startTimer = () => {
    if (isNaN(countdownDuration) || countdownDuration <= 0) {
      setTimerDisplay("Sie müssen eine Zahl eingeben");
      return;
    }

    for (let i = countdownDuration; i >= 0; i--) {
      setTimeout(() => {
        console.log(i); 
        setTimerDisplay(i + " Sekunden"); 
        if (i === 0) {
          setTimerDisplay("Timer abgeschlossen!"); 
        }
      }, (countdownDuration - i) * 1000); 
    }
  };

  return (
    <div>
      <h1>Timer</h1>
      <hr />
      <label htmlFor="timerInput">Bitte Timerlänge eingeben</label>
      <input 
        type="number" 
        id="timerInput"
        value={countdownDuration}
        onChange={(e) => setCountdownDuration(parseInt(e.target.value))}
      />
      <button onClick={startTimer}>Timer starten</button>
      <div id="timerDisplay">{timerDisplay}</div>
    </div>
  );
}

export default Timer;
