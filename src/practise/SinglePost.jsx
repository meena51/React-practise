import React, { useEffect, useState } from 'react'
import axios from 'axios'
function SinglePost() {
    const [post,setPost] = useState({})
    const [id,setId] = useState(0)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res)=>{
            setPost(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    })
  return (

    <div>
        <input type="number" value={id} onChange={(e)=>{setId(e.target.value)}} />
    {post.title}
    </div>
  )
}

export default SinglePost
