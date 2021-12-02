import React, { Component } from 'react';
import { format as formatDateFns } from 'date-fns';

interface ClockProps {
  format?: string;
  delay?: number;
}

class Clock extends Component<ClockProps> {
  render() {
    const now = new Date();
    const { format = 'HH:mm:ss' } = this.props;
    return <div className="Clock">Il est {formatDateFns(now, format)}</div>;
  }
}

export default Clock;
