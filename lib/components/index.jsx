import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  state = { answer: 42 };
  asyncFunc() {
    return Promise.resolve(45);
  }
  async componentDidMount() {
    this.setState({
      answer: await this.asyncFunc()
    });
  }
  render() {
    return <h2>Hello React - {this.state.answer}</h2>;
  }
}

export default App; 
ReactDOM.render(<App />, document.getElementById('root'));
