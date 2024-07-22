// Fetching data from API using useReduce and useEffect
import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

// Initialization
const initialState = {
    loading: false,
    post: {},
    error: ''
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'Success':
            return {
                loading: false,
                post: action.payload,
                error: ''
            };
        case 'Error':
            return {
                loading: false,
                post: {},
                error: 'Something went wrong'
            };
        default:
            return state;
    }
};

function DataFetchingusereduce() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({ type: 'Loading' });
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                dispatch({ type: 'Success', payload: res.data });
            })
            .catch(error => {
                dispatch({ type: 'Error' });
            });
    }, []);

    return (
        <div>
            {state.loading ? 'Loading' : state.post.title}
            {state.error ? state.error : null}
        </div>
    );
}

export default DataFetchingusereduce;
