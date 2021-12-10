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
};

const Test = () =>  {
  const [count, setCount] = useState(0); //counter
  const increment = () => {
    setCount(count + 1);
  }

  return (
    //<div className="Test">
     // {count} <button onClick={() => setCount(count +1)}></button>
    //</div>
    <div className='Test'>
      {count} <button onClick={increment}>Increment</button>
    </div>
  );
};
export default App;
