import React, {useState} from 'react';


const Test = () =>  {
    const [count, setCount] = useState(0);
    return (
      <div className="Test">
        <h3> {count} </h3><br/>
        <button className='pixel' onClick={() => setCount(count +1)}>Increment</button>
        <button className='pixel' onClick={() => setCount(count -1)}>Decrement</button>
      </div>
      
    );
  };

  export default Test;