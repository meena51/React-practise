import React, { useState,useEffect } from 'react'
import axios from 'axios'
function Blog() {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            
            setPosts(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
  return (
    <div>
      {
        posts.map((post)=>{
            return (<li key={post.id}>{post.title}</li>)
        })
      }
    </div>
  )
}

export default Blog
