//Fetching Individual data from API
import React,{useState, useEffect} from 'react'
import axios from 'axios'

function DataFetchinIndivudual() {
    const [post, setPost] = useState({})
    const [ id,setId] = useState()
    const [idFromButton, setIdFromButton] = useState()
    
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
        .then(res=>{
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    })
    function handleClick(){
        setIdFromButton(id)
        console.log(id)
    }

  return (
    <div>
        <input type="text" value={id}  onChange={e=>setId(e.target.value)}/>
        <button type="button" onClick={handleClick}>Click</button>
        <h1>{post.title}</h1>
    </div>
  )
}

export default DataFetchinIndivudual
