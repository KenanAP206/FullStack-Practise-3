import React, { useState, useEffect } from 'react'
import './Timer.css'

function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <section id='timer'>
        <div className="dealofweek">
          <div className="dow-up">
            <h2>Deal Of The Week</h2>
            <hr />
          </div>
          <div className="dow-mid">
            <div className="dow-mid_time">
              <span>{timeLeft.days}</span>
              Day
            </div>
            <div className="dow-mid_time">
              <span>{timeLeft.hours}</span>
              Hours
            </div>
            <div className="dow-mid_time">
              <span>{timeLeft.minutes}</span>
              Mins
            </div>
            <div className="dow-mid_time">
              <span>{timeLeft.seconds}</span>
              Sec
            </div>
          </div>
          <button>SHOP NOW</button>
        </div>
      </section>
    </div>
  )
}

export default Timer
