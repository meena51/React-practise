import React, { Component } from 'react'

class Counter extends Component {
  constructor(){
    super()
      this.state = {
        count : 0
      }
  }
  increment(){
    this.state.count=this.state.count+1
    this.setState({
        count : this.state.count
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={()=>this.increment()}>Increment</button>
      </div>
    )
  }
}

export default Counter;
