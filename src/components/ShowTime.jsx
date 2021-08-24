import React, { useState, useEffect } from 'react';
import clock from '../clock-regular.svg';

function ShowTime(props) {
    var { timeState } = props
    const [time, setTime] = useState("00:00");
    var intervalId = null;
    useEffect(() => {
        if (timeState === true) {
            // eslint-disable-next-line
            intervalId = setInterval(() => {setTime(getTime())}, 1000);
        }
        return () => {
            clearInterval(intervalId)
            console.info("componente destruido")
        }
    }, [timeState])

    const getTime = () => {
        const today = new Date()
        return (`${today.getHours()} : ${today.getMinutes()} : ${today.getSeconds()} `)
    }

    return (
        <div id="timer">
            Time is <br />
            <img src={clock} className="clock-icon" alt="clock"/>
                <span id="time"> {time}</span>
        </div>
    )
}

export default ShowTime