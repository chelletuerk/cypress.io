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

    if (!(bucketX || bucketY) >= 0) {
      alert(
        'Please use positive numbers'
      )
      this.setState({ bucketX: '', bucketY: '' })
      return null
    }

    if (bucketX < bucketY) {
      alert(
        'Please make the first bucket larger than the second bucket'
      )
      this.setState({ bucketX: '', bucketY: '' })
      return null
    }

    // amount moved from bucketX to bucketY, also current amount in bucketY
    // assumed that bucketY is emptied
    // assumed that bucketX is refilled
    const bucketX1 = bucketX - bucketY

    // remaining space left to fill in bucketY
    const remainingBucketYSpace = bucketY - bucketX1

    // final result
    const final = bucketX - remainingBucketYSpace

    this.setState({bucketX: '', bucketY: '', total: final })
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
          placeholder='Bucket #1 Amount'
          className='inputX'
        >
        </input>
        <input
          onChange={this.handleInputY}
          value={this.state.bucketY}
          type='number'
          placeholder='Bucket #2 Amount'>
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
