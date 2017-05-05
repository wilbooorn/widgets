import React from 'react';

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = { time: new Date() };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.timer);
    this.timer = 0;
  }

  tick(){
    this.setState({ time: new Date() });
  }

  render(){
    const { time } = this.state;
    const days = ["SUN", "MON", "TUES", "WED", "THURS", "FRI", "SAT"];
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    return (
      <div className="clock">
        <div className = "time">
          <h1>Time:</h1>
          <h1>{time.getHours()}:{pad(time.getMinutes())}:{pad(time.getSeconds()) } PDT</h1>
        </div>

        <div className="date">
          <h1>Date:</h1>
          <h1>{days[time.getDate()]}, {months[time.getMonth()]} {time.getDay()}, {time.getFullYear()}</h1>
        </div>

      </div>
    );

  }
}

function pad(value) {
    if(value < 10) {
        return '0' + value;
    } else {
        return value;
    }
}

export default Clock;
