import React, {useContext} from 'react';
import ComponentF from './ComponentF';
import {UserContext, ClassContext } from '../App';
function ComponentE() {
    const user = useContext(UserContext)
    const clas = useContext(ClassContext)
  return (
    <div>
        {user}  {clas}
      
    </div>
  );
}

export default ComponentE;
