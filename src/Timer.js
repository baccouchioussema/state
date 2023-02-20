import React, { Component } from 'react';
class Timer extends React.Component {
    state = { time: 0 };
  
    componentDidMount() {
      this.intervalId = setInterval(() => {
        this.setState(prevState => ({ time: prevState.time + 1 }));
      }, 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.intervalId);
    }
  
    render() {
      return <div >time!!!: {this.state.time} seconds</div>;
    }
  }
  export default Timer;