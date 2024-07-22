import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
  constructor(){
    super()
        this.state={
            Parentname : "Meena"
        }
    //this.handleMsg=this.handleMsg.bind(this)
  }
  handleMsg(childName){
    alert(`Hello ${this.state.Parentname} from ${this.childName}`)
  }
  render() {
    return (
      <div>
        <ChildComponent handle={()=>this.handleMsg()}/>
      </div>
    )
  }
}

export default ParentComponent
