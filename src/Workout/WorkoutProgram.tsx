import styled from 'styled-components';
import React, {useState, useEffect} from "react";
import WorkoutGoal from './WorkoutGoal';

const WorkoutProgram = props => {
    return (
        <div className='workout-program'>
            <WorkoutGoal></WorkoutGoal>

        </div>
    );
  };
  
export default WorkoutProgram;