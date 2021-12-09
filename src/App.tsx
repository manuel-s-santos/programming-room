import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [isHidden, setIsHidden] =  useState(false);
  
  return (
    <div>
      <button onClick={() => {
        setIsHidden(!isHidden);}}>
        {isHidden ? 'Hide' : 'Show'}
      </button>

      {isHidden && <p>Lorem ipsum dolor </p>}
      
    </div>
  );
}

export default App;
