import React, { useEffect, useState } from "react";
import Time from "./Time";
import Button from "./Button";
import LItem from "./LItem";
import Footer from "./Footer";

function App() {
  const [started, setStarted] = useState(false);
  const [paused, setPaused] = useState(false);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [millisecond, setMilliSecond] = useState(0);
  const [flagArray, setFlagArray] = useState([]);
  const [count, setCount] = useState(0);
  const year = new Date().getFullYear();

  useEffect(() => {
    let myInterval;
    // if (!started) {
    //   stop();
    // }
    if (started && !paused) {
      myInterval = setInterval(() => {
        increment();
        setCount(count + 1);
      }, 1);
    } else {
      clearInterval(myInterval);
    }

    return () => {
      clearInterval(myInterval);
    };
  }, [started, paused, count]);

  function increment() {
    if (millisecond === 99) {
      setMilliSecond(0);
      if (second === 59) {
        setSecond(0);
        if (minute === 59) {
          setMinute(0);
          if (hour === 99) {
            stop();
          } else {
            setHour(hour + 1);
          }
        } else {
          setMinute(minute + 1);
        }
      } else {
        setSecond(second + 1);
      }
    } else {
      setMilliSecond(millisecond + 1);
    }
  }

  function start() {
    setStarted(true);
  }

  function flag() {
    let temp = {
      hour: hour,
      minute: minute,
      second: second,
      millisecond: millisecond
    };
    setFlagArray((prev) => {
      return [temp, ...prev];
    });
    // console.log(flagArray);
  }

  function pause() {
    setPaused(true);
  }

  function stop() {
    setStarted(false);
    setPaused(false);
    setHour(0);
    setMinute(0);
    setSecond(0);
    setMilliSecond(0);
    setFlagArray((prev) => {
      return [];
    });
  }

  function resume() {
    setPaused(false);
  }

  return (
    <div className="app">
      <h1 className="heading">StopWatch</h1>
      <div className="container time-container">
        <div className="row">
          <Time name="hour" time={hour} />
          <Time name="minute" time={minute} />
          <Time name="second" time={second} />
          <Time name="millisecond" time={millisecond} />
        </div>
        <div className="container-fluid buttons">
          <div className="row">
            {!started && <Button onClick={start} icon="play" size="col-12" />}
            {started && !paused && (
              <Button onClick={flag} icon="flag" size="col-6" />
            )}
            {started && !paused && (
              <Button onClick={pause} icon="pause" size="col-6" />
            )}
            {started && paused && (
              <Button onClick={stop} icon="stop" size="col-6" />
            )}
            {started && paused && (
              <Button onClick={resume} icon="play" size="col-6" />
            )}
          </div>
        </div>
      </div>
      <ul>
        {flagArray.map((item) => {
          return <LItem flag={item} />;
        })}
      </ul>
      <Footer year={year} />
    </div>
  );
}

export default App;
