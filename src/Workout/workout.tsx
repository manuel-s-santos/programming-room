import styled from 'styled-components';
import React, {useState, useEffect} from "react";
import WorkoutProgram from './WorkoutProgram';
import WorkoutGoal from './WorkoutGoal';


const  Workout = () => {
    const [isHidden, setIsHidden] =  useState(false);
   // const []
    return(
             <><div>
      <button className='workout-btn' onClick={() => {
        setIsHidden(!isHidden);
      } }>
        {isHidden ? 'Hide Workout' : 'Workout Now'}
      </button>
      {isHidden && <h4> <WorkoutProgram></WorkoutProgram> </h4>}  
    </div>
        </>
    );
};

export default Workout;
