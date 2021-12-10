import React, {useState} from 'react';

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

  export default Test;