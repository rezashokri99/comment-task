import { useState, useEffect } from 'react';
import { getRemainingTimeUntilMsTimestamp } from './CountdownTimerUtils';

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const CountdownTimer = ({ countdownTimestampMs }) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [countdownTimestampMs]);

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

    return (
        <div className="countdown-timer text-white">
            {
                remainingTime.days > 0 ?
                    <span className="two-numbers" style={{ color: "#00C69B" }}>{remainingTime.days} روز مانده</span> :
                    <>
                    <span className="two-numbers" style={{ color: "#00C69B" }}>{remainingTime.hours}</span>
                    <span className="two-numbers" style={{color: "#00C69B"}}>:{remainingTime.minutes} {remainingTime.hours > 0 ? "ساعت" : "دقیقه"} مانده</span>
                    </>

            }
            
        </div>
    );
}

export default CountdownTimer;