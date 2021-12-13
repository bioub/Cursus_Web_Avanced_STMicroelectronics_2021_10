import React, { Component, MouseEvent } from 'react';

interface CounterProps {

}

interface CounterState {
  count: number;
}

class Counter extends Component<CounterProps> {
  state: CounterState = {
    count: 0,
  };

  handleClick = (event: MouseEvent) => {
    console.log(event);

    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    console.log('Counter');
    const { count } = this.state;
    return <button className="Counter" onClick={this.handleClick}>{count}</button>;
  }
}

export default Counter;
