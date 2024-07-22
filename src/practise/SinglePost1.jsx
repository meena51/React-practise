import React, { useState } from 'react'
import axios from 'axios'
function SinglePost1() {
    const [post,setPost] =useState({})
    const [id,setId] = useState(0)
    const clickHandler = ()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res)=>{
            setPost(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div>
      <input type="text" value={id} onChange={(e)=>{setId(e.target.value)}} />
      <button onClick={clickHandler}>Submit</button>
      <div>
        {post.title}
      </div>
    </div>
  )
}

export default SinglePost1
