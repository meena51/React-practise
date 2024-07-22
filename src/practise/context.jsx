import React,{useState} from "react";
const Context = () => {
  const [name, setName] = useState("");
  localStorage.setItem("name", name);
  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  );
};
export default Context;
