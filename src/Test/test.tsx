import React, {useState} from 'react';
import '../Test/test.css';


const Test = () =>  {
    const [count, setCount] = useState(0);
    return (
      <div className="Test">
        <button className='pixel' onClick={() => setCount(count +1)}>Increment</button> 
        <h3> {count} </h3><br/>
        <button className='pixel' onClick={() => setCount(count -1)}>Decrement</button>
      </div>
      
    );
  };

  export default Test;