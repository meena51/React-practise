
import React, {Component} from "react";
// const Greet = (props) => {
//     return <h1>Hello {props.name}</h1>
// }
class Greet extends Component {
    constructor(){
        super()
        this.state={
            message : "Hello"
        }
    }
    handleClick(){
        this.setState({
            message : "Good Bye"
        })
    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.handleClick()}>Click</button>
            </div>
        )
    }
}
export default Greet;