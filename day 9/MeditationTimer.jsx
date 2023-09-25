import React, { useState, useEffect } from 'react';
import '../assets/css/MeditationTimer.css';

// Add an audio file for alert sound
import alertSound from '../assets/audio/bell.mp3';

const MeditationTimer = () => {
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // Add a state to track the progress percentage
  const [progress, setProgress] = useState(0);

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(5);
    setSeconds(0);
    setProgress(0);
  };

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            setIsActive(false);
            clearInterval(interval);
            // Play an alert sound when the timer ends
            const audio = new Audio(alertSound);
            audio.play();
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }

        // Calculate progress percentage
        const totalSeconds = minutes * 60 + seconds;
        const remainingSeconds = minutes * 60 + seconds;
        const remainingPercentage = (remainingSeconds / totalSeconds) * 100;
        setProgress(100 - remainingPercentage);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds.toString();

  return (
    <div className="meditation-timer">
      <div className="background-image">
        {/* Add your attractive background image here */}
        {/* Example: <img src="/path/to/your/image.jpg" alt="Background" /> */}
      </div>
      <div className="timer-container">
        <h1>Meditation Timer</h1>
        <div className={`timer ${isActive ? 'active' : ''}`}>
          <span className="minutes">{formattedMinutes}</span>:
          <span className="seconds">{formattedSeconds}</span>
        </div>
        {/* Add a progress bar */}
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="controls">
          {!isActive ? (
            <button onClick={startTimer}>Start</button>
          ) : (
            <button onClick={pauseTimer}>Pause</button>
          )}
          <button onClick={resetTimer}>Reset</button>
          <button><a href="/home" style={{color:"white"}}>Back</a></button>
        </div>
      </div>
    </div>
  );
};

export default MeditationTimer;
