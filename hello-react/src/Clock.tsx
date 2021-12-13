import { format as formatDateFns } from 'date-fns';
import React, { Component } from 'react';

interface ClockProps {
  format?: string;
  delay?: number;
}

interface ClockState {
  now: Date;
  // name: string;
}

class Clock extends Component<ClockProps> {
  state: ClockState = {
    now: new Date(),
    // name: 'Romain',
  };

  interval: any;

  componentDidMount() {
    // setInterval / clearInterval
    // addEventListener / removeEventListener
    // WebSockets / ws.close
    // Worker / ws.destroy
    this.interval = setInterval(() => {
      this.setState({
        now: new Date(), // on ne passe que les nouvelles clés du state (ici name serait conservé)
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { now } = this.state;
    const { format = 'HH:mm:ss' } = this.props;
    return <div className="Clock">Il est {formatDateFns(now, format)}</div>;
  }
}

export default Clock;
