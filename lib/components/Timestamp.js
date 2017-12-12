import React, { Component } from 'react';
import storeProvider from './storeProvider';

class Timestamp extends Component {
  render() {
    return <div>{this.props.timestampDisplay}</div>;
  }

  static getTime = timestamp => {
    return timestamp.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
  };
}

function extraProps(store) {
  return {
    timestampDisplay: Timestamp.getTime(store.getState().timestamp)
  };
}

export default storeProvider(extraProps)(Timestamp);
