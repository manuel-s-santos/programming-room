import React, {useState, useEffect} from "react";
import WorkoutGoal from './WorkoutGoal';
import  './workout.css';

const WorkoutProgram = () => {
    return (
        <div className='workout-program'>
             <label><h3> Workout Program Checklist </h3></label>
             <WorkoutGoal></WorkoutGoal>
        </div>
    );
   };  
export default WorkoutProgram;