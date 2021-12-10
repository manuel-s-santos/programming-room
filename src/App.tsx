import React, {useState} from 'react';
import './App.css';
import Test from './Test/test';


const App = () => {
  const [isHidden, setIsHidden] =  useState(false);
  
  return (
    <><div>
      <button className='default-btn' onClick={() => {
        setIsHidden(!isHidden);
      } }>
        {isHidden ? 'Hide' : 'Show'}
      </button>
      {isHidden && <p>Lorem ipsum dolor </p>}
    </div>
    <React.Fragment>
        <Test>Increment</Test>
      </React.Fragment></>
  );
};


export default App;
