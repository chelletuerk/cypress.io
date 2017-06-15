import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      bucketX: 0,
      bucketY: 0,
    }
    this.handleInputX = this.handleInputX.bind(this)
  }

  handleInputX(e) {
    this.setState({bucketX: e.target.value})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Water Bucket</h2>
        </div>
        <input
          onChange={this.handleInputX}
          value={this.state.bucketX}
          type='number'
          placeholder='Enter A Number'>
        </input>
      </div>
    )
  }
}

export default App;
