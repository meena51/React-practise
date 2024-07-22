
import axios from 'axios'
import React, { useEffect, useReducer } from 'react'

function Fetchusingreducrer() {
    const initialState = {
        loading : true,
        error : " ",
        data : []
    }
    const reducer = (state,action)=>{
        switch(action.type){
            case "FETCH_SUCCESS" :
                return {
                    loading : false ,
                    error : '',
                    data : action.payload
                }
            case "FETCH_FAILURE" : 
                return {
                    loading : false,
                    error : "401 Page not found",
                    data : []
                }
                default :
                 return state
        }
    }
    const [state,dispatch ] = useReducer(reducer, initialState)
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            dispatch({
                type: "FETCH_SUCCESS",
                payload:res.data
            })
        })
        .catch((err)=>{
            dispatch({
                type : "FETCH_FAILURE"
            })
        })
    },[]);
  return (
    <div>
        
        {state.loading ? (
        'Loading...'
      ) : state.error ? (
        state.error
      ) : (
        <ul>
          {state.data.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Fetchusingreducrer
