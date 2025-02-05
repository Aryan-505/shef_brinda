import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./A.css"; // Import external CSS

function B() {
    const [time, setTime] = useState(15.00); // Start at 10 seconds
    const [running, setRunning] = useState(false);
    const navigate = useNavigate();
    const [timeOver, setTimeOver] = useState(false);

    useEffect(() => {
        let timer;
        if (running && time > 0) {
            timer = setInterval(() => {
                setTime((prev) => Math.max(0, (prev - 0.1).toFixed(2))); // Reduce time by 0.1s
            }, 100);
        } else if (time === 0) {
            setRunning(false); // Stop timer at 00.00
            setTimeOver(true); // Show "Time Over" message
            playAlarm(); // Play alarm when countdown ends
        }

        return () => clearInterval(timer); // Cleanup interval
    }, [running, time]);

    const restartTimer = () => {
        setTime(10.00); // Reset timer to 10 seconds
        setRunning(false); // Stop running state
        setTimeOver(false); // Hide "Time Over" message
    };

    const playAlarm = () => {
        const alarm = new Audio("/alarm.wav"); // Public folder reference
        alarm.play();
    };

    return (
        <div className="a-container"  style={{
            background: 'url("/bg3.gif")'}}>
            <h1 className="title">⏳ Brinda, Make Your Bread</h1>
            <div className="timer-card">
                <h2 className="timer-text">{time.toFixed(2)}s</h2>
            </div>

            {/* Show "Your Chicken is Ready!" message when timer reaches 0 */}
            {timeOver && <p className="time-over">⏳ Your Bread is Ready!</p>}
            
            <div className="btn-group">
                <button 
                    className="btn btn-start" 
                    onClick={() => setRunning(true)}
                    disabled={running} // Disable when running
                >
                    ▶ Start
                </button>

                <button 
                    className="btn btn-restart" 
                    onClick={restartTimer}
                >
                    🔄 Restart
                </button>

                <button 
                    className="btn btn-home" 
                    onClick={() => navigate("/")} // Go back to homepage
                >
                    🏠 Home
                </button>
            </div>
        </div>
    );
}

export default B;
