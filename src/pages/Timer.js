import React, { Component , useState, useContext } from "react";

const Timer = () => {

    const [date, setDate] = useState((new Date()));

    function handleDate () {
        console.log(date);
        setDate((new Date()));
        console.log(date);
    }
    
    return(
        <div>
            <h1>Hello, Country!</h1>
            <h2> { date.toLocaleString() } </h2>
            <button onClick={handleDate}>Get Date Time</button>
        </div>
    );

}

export default Timer;