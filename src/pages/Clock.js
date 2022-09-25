import React, { Component , useState, useContext } from "react";

class Clock extends React.Component {

    state = { date : (new Date()) };

    constructor(props) {
        super(props);
        this.state = { date : (new Date()) }
    }

    componentDidMount() {
        this.timerID= setInterval(
            () => this.tick(), 1000
        )
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState( {date: new Date()} );
    }

    handleSubmit = (e) => {
    }

    handleChange = (e) => {
        console.log(e.target.id + ": " + e.target.value)
        this.setState({ [e.target.id]: e.target.value });
    }
    
    handleDate = () => {
        console.log(this.state.date);
        this.state.date = (new Date());
        console.log(this.state.date);
    }
    
    render() {
        return(
            <div>
                <h1>Hello, Country!</h1>
                <h2> { this.state.date.toLocaleString() } </h2>
                <button onClick={this.handleDate}>Get Date Time</button>
            </div>
        );

    }
}

export default Clock;