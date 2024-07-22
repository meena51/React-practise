import React, { Component } from 'react'

class FRInput extends Component {
    constructor(props){
        super(props)
        this.inputRef=React.createRef()
    }
    componentDidMount(){
        this.inputRef.current.focus()
    }
    handleuname(){
      this.inputRef.current.focus()
    }
    handleemail(){
      this.inputRef.current.focus()
    }
    handlepword(){
      this.inputRef.current.focus()
    }
  render() {
    return (
      <div>
        <label htmlFor="">Username</label>
        <input type='text' ref={this.inputRef} onChange={this.handleuname}/>
        <label htmlFor="">Email</label>
        <input email='email' ref={this.inputRef} onChange={this.handleemail}/>
        <label htmlFor="">Password</label>
        <input type="password" ref={this.inputRef} onChange={this.handlepword}/>
      </div>
    )
  }
}
// const FRInput = React.forwardRef((props,ref)=> {
//     return (
//         <div>
//             <input type='text ' ref={ref}/>
//         </div>
//     )
// })
export default FRInput
