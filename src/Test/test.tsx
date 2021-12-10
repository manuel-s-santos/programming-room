import React, {useState} from 'react';

const Test = (props) =>  {
    const [count, setCount] = useState(0);
    return (
      <div className="Test">
        {count}
        <button onClick={() => setCount(count +1)}>Increment</button>
        <button onClick={() => setCount(count -1)}>Decrement</button>
      </div>
      
    );
  };

  export default Test;