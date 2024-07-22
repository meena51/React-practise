import React, {useState} from "react";
function Appp(){

    const [name,setName] = useState(" ");
    const [headingtext, setheadingtext] = useState(" ");

    function handleChange(event) {
        console.log('changed');
        setName(event.target.value);
    }

    const [heading,setHeading]=useState("Hello");
    const [mouseOver, setmouseOver] = useState(false);

    function Click(){
        console.log('Clicked');
        setheadingtext(name);
    }
    function handleMouseOver(){
        setmouseOver(true);
    }
    function handleMouseOut(){
        setmouseOver(false);
    }
    return (
        <div className="box">
            <h1>{heading} {headingtext}</h1>
            <input onChange={handleChange} type="text" placeholder="What is your name"/>
            <button 
            onClick={Click}
            //style={{backgroundColor: mouseOver?"black":"white"}}
            //onClick={Click}
            //onMouseOver={handleMouseOver}
            //onMouseOut={handleMouseOut}
            >Submit</button>
        </div>
    )
}
export default Appp;