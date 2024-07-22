import React, { Component } from 'react'

class form extends Component {
  constructor(){
    super()
    this.state={
      username:" ",
      textarea:" ",
      topic : " "
    }
  }
  handleChange =(event)=>{
    this.setState({
      username : event.target.value
    })
  }
  handleTextArea=(event)=>{
    this.setState({
      textarea : event.target.value
    })
  }
  handleTopic=(event)=>{
    this.setState({
      topic : event.target.value
    })
  }
  handleSubmit=(event)=>{
    alert("Hello");
    event.preventDefault()
  }
  render() {
    return (
      <form  onSubmit={this.handleSubmit}>
        <div>
            <label>Username</label>
            <input type='text' value={this.state.username} onChange={this.handleChange}></input>
        </div>
        <div>
          <label>TextArea</label>
          <textarea value={this.state.textarea} onChange={this.handleTextArea} ></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value= {this.state.topic} onChange={this.handleTopic} name="" id="">
            <option value="React">React</option>
            <option value="vue">Vue</option>
            <option value="Angular">Angular</option>
          </select>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    )
  }
}

export default form
