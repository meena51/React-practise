//Conditional Rendering
import React, { Component } from 'react'

class UserGreet extends Component {
    constructor(){
        super()
        this.state={
            isLoggedIn : false
        }
    }
  render() {
    return (this.state.isLoggedIn && <div>Welcome Meena</div>)
    // if (this.state.isLoggedIn===true){
    //     return <div>Welcome Meena</div>
    // }
    // else {
    //     return <div>Welcome User</div>
    }
    // return (
    //   <div>
        
    //   </div>
    // )
  }


export default UserGreet
