import React, {useState} from 'react';
import './App.css';
import Test from './Test/test';
import Workout from './Workout/workout';
import Joke from './Test/joke';


const App = () => {
  const [isHidden, setIsHidden] =  useState(false);
  
  return (
    <><div>
      <button className='default-btn' onClick={() => {
        setIsHidden(!isHidden);
      } }>
        {isHidden ? 'Hide this' : 'Show this'}
      </button>
      {isHidden && <div> <h4> <Joke></Joke></h4></div>}
    </div>
    
    <React.Fragment>
        <Test></Test>
        <Workout></Workout>
      </React.Fragment></>
  );
};


export default App;
