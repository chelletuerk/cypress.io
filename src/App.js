import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      bucketX: '',
      bucketY: '',
    }
    this.handleInputX = this.handleInputX.bind(this)
    this.handleInputY = this.handleInputY.bind(this)
  }

  handleInputX(e) {
    this.setState({bucketX: e.target.value})
  }

  handleInputY(e) {
    this.setState({bucketY: e.target.value})
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
        <input
          onChange={this.handleInputY}
          value={this.state.bucketY}
          type='number'
          placeholder='Enter A Number'>
        </input>
      </div>
    )
  }
}

export default App;
