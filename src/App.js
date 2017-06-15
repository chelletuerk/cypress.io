import React, { Component } from 'react';
import './App.css';
import Button from './Button'

class App extends Component {
  constructor() {
    super()
    this.state = {
      bucketX: '',
      bucketY: '',
      total: null,
    }
    this.handleInputX = this.handleInputX.bind(this)
    this.handleInputY = this.handleInputY.bind(this)
    this.handleCalculation = this.handleCalculation.bind(this)
  }

  handleInputX(e) {
    this.setState({bucketX: e.target.value})
  }

  handleInputY(e) {
    this.setState({bucketY: e.target.value})
  }

  handleCalculation() {
    const { bucketX, bucketY } = this.state
    const sumTotal = +bucketX + +bucketY
    console.log(sumTotal)
    this.setState({bucketX: '', bucketY: '', total: sumTotal})
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
          placeholder='Enter A Number'
          className='inputX'
        >
        </input>
        <input
          onChange={this.handleInputY}
          value={this.state.bucketY}
          type='number'
          placeholder='Enter A Number'>
        </input>
        <br />
        <h3>{this.state.total}</h3>
        <Button
          className='button'
          text='Calculate'
          onClick={this.handleCalculation}
        />
      </div>
    )
  }
}

export default App;
