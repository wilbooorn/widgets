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
    return (
      <h1>{time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</h1>
    );

  }
}

export default Clock;
