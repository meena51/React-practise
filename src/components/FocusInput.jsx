import React, { Component } from 'react'
import Ref from "./Ref"
class FocusInput extends Component {
    constructor(props){
        super(props)
        this.comRef=React.createRef()
    }
    clickhandler(){
        this.comRef.current.focusInput()
    }
  render() {
    return (
      <div>
        <Ref ref={this.comRef}/>
        <button onClick={this.clickhandler()}>Focus Input</button>
      </div>
    )
  }
}

export default FocusInput
