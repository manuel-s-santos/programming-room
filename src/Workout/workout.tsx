import styled from 'styled-components';
import React, {useState, useEffect} from "react";


const  Workout = () => {
    const [isHidden, setIsHidden] =  useState(false);
    return(
             <><div>
      <button className='workout-btn' onClick={() => {
        setIsHidden(!isHidden);
      } }>
        {isHidden ? 'Hide Workout' : 'Workout Now'}
      </button>
      {isHidden && <h4>Lorem ipsum dolor </h4>}
    </div>
        </>
    );
};

export default Workout;
