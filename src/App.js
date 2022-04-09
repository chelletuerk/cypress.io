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

    const parsedBucketX = +bucketX
    const parsedBucketY = +bucketY

    if (parsedBucketX <= 0 || parsedBucketY <= 0)  {
      alert(
        'Please use positive numbers'
      )
      this.setState({bucketX: '', bucketY: '' })
      return null
    }

    if (parsedBucketX < parsedBucketY) {
      alert(
        'Please make the first bucket larger than the second bucket'
      )
      this.setState({ bucketX: '', bucketY: '' })
      return null
    }

    // amount moved from parsedBucketX to parsedBucketY, also current amount in parsedBucketY
    // assumed that parsedBucketY is emptied
    // assumed that parsedBucketX is refilled
    const bucketX1 = parsedBucketX - parsedBucketY

    // remaining space left to fill in parsedBucketY
    const remainingBucketYSpace = (parsedBucketY - bucketX1 < 0)
      ? 0
      : parsedBucketY - bucketX1

    // final result
    const final = parsedBucketX - remainingBucketYSpace

    this.setState({bucketX: '', bucketY: '', total: final })
  }

  render() {
    return (
      <div className="App">
        <div className="app-header">
          <h2>Water Bucket</h2>
        </div>
        <input
          onChange={this.handleInputX}
          value={this.state.bucketX}
          id='input1'
          type='number'
          placeholder='Bucket #1 Amount'
          className='inputX'
        >
        </input>
        <input
          onChange={this.handleInputY}
          value={this.state.bucketY}
          id='input2'
          type='number'
          placeholder='Bucket #2 Amount'
          className='inputX'
        >
        </input>
        <br />
        <h3 id='measured-amt'>{this.state.total ? `Measured Amount: ${this.state.total}` : ''}</h3>
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
