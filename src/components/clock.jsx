import { React, useState, useEffect } from "react";
import ShowTime from './ShowTime.jsx';
import Botton from './Botton.jsx';

function Clock() {
    const [clockStatus, setClockStatus] = useState(true);
    const [btnValue, setbtnValue] = useState("Pause");

    useEffect(() => {
        setClockStatus(true)
        return () => {
            setClockStatus(false)
        }
    }, [])

    const toggleState = () => {
        if (clockStatus) { setClockStatus(!clockStatus); setbtnValue("Resume")} else{setClockStatus(!clockStatus); setbtnValue("Pause")}
        
    }
    return (
        <div className="card mt-2 center" id="clock">
            <div className="card-body">
                <ShowTime timeState={clockStatus}></ShowTime>
            </div>
            
            <div className="card-footer">
                <Botton btnText={btnValue} action={toggleState} ></Botton>

            </div>
        </div>
    )
}


export default Clock