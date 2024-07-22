import React from 'react';
import { UserContext } from '../App'; // Correct import path

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {user => {
          return <h1>Hello {user}</h1>;
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentF;
