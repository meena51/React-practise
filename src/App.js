import React, {useContext} from "react";
import ComponentC from "./practise/ComponentC";
import ComponentE from "./practise/ComponentE";
import ControlledForm from "./practise/ControlledForm";
import UncontrolledForm from "./practise/UncontrolledForm";
import Formvalidation from "./practise/Formvalidation";
import FocusRef from "./practise/FocusRef";
import TimerRef from "./practise/TimerRef";
import Age from "./practise/Age";
import ValidatedForm from "./practise/ValidatedForm";
import HoverColor from "./practise/HoverColor";
import Counterreducer from "./practise/Counterreducer";
import CounterredducerObject from "./practise/CounterredducerObject";
import Fetchusingreducrer from "./practise/Fetchusingreducrer";





//import HookCoordinates from "./components/HookCoordinates";






//import ParentComponent from "./components/ParentComponent";
//import Greet from "./components/Greet";
//import Counter from "./components/Counter";
//import NameList from "./components/NameList";
// import FocusInput from "./components/FocusInput";
//import FRInput from "./components/FRInput";
// import FunCount from "./components/FunCount";
// import HoverCounter from "./components/HoverCounter";
// import Counter2 from "./components/Counter2";
// import ComponentC from "./components/ComponentC";
// import { UserProvider } from "./components/UserContext";
import Context from "./practise/context";
import FetchData from "./practise/fetchData";


export const UserContext = React.createContext();
export const ClassContext = React.createContext();
function App() {
  return (
    <div className="App">
      <FetchData/>
    </div>
  );
}

export default App;


  /* <Counter2 render={(count,incrementCount)=>(
        <FunCount count={count} incrementCount={incrementCount}/>
      )}/>
      <Counter2 render={(count,incrementCount)=>(
        <HoverCounter count={count} incrementCount={incrementCount}/>
      )}/> */
  // const [msg,setMsg]=useState("Welcome User");
  // function Changemsg(){
  //   setMsg("Thank You");
  // }
  //   return (

  //   <div>
  //      <h1>{msg}</h1>
  //      <button onClick={Changemsg}>Subscribe</button>
       
    
  //   </div>
  // )
  // const [count,setCount] = useState(0);
  // function handleCount(){
  //   setCount(count+1);
  // }
  // return (
  //   <div>
  //     <h1>{count}</h1>
  //     <button onClick={handleCount}>+</button>
  //   </div>
  // )
//   const [fullName, setFullName] = useState({
//     fName: "",
//     lName: ""
//     //email: "",
//   });
//   const [Email,setEmail] = useState(" ");

//   function handleChange(event) {
//     const { value, name } = event.target;

//     setFullName(prevValue => {
//       if (name === "fName") {
//         return {
//           fName: value,
//           lName: prevValue.lName
//         };
//       } else if (name === "lName") {
//         return {
//           fName: prevValue.fName,
//           lName: value
//         };
//       }
//       // else if (name==="email") {
//       //   return {
//       //     fName: prevValue.fName,
//       //     lname: prevValue.lName,
//       //     email: value
//       //   }
//       // }
//     });
//     // if (name==="email"){
//     //   setEmail(event.target.value);
//     // }
    
//   }
//   function handleEmail(event){
//     setEmail(event.target.value)
//   }

//   return (
//     <div className="container">
//       <h1>
//         Hello {fullName.fName} {fullName.lName}
//       </h1>
//       <p>{Email}</p>
//       <form>
//         <input
//           name="fName"
//           onChange={handleChange}
//           placeholder="First Name"
//           value={fullName.fName}
//         />
//         <input
//           name="lName"
//           onChange={handleChange}
//           placeholder="Last Name"
//           value={fullName.lName}
//         />
//         <input 
//           name="email"
//           onChange={handleEmail}
//           placeholder="email"
          
//         />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
 
// const citrus=['Lime','Lemon','Orange'];
// const fruits=['Mango','banana',...citrus,'Apple'];
// console.log(fruits);
// let a=[12,13,14]
// let k=a.map((val,i,a)=>{
//   return val*i;
// })
// console.log(k);

