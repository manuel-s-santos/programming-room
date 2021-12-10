import React, {useState} from 'react';
import classes from '../Test/test.module.css';

const Test = (props) =>  {
    const [count, setCount] = useState(0);
    return (
      <div className="Test">
        {count}
        <button className='pixel' onClick={() => setCount(count +1)}>Increment</button>
        <button className='pixel' onClick={() => setCount(count -1)}>Decrement</button>
      </div>
      
    );
  };

  export default Test;