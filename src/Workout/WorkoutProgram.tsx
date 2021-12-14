import React, {useState, useEffect} from "react";
// import WorkoutGoal from './WorkoutGoal';
import  './workout.css';

const WorkoutProgram = () => {
    return (
        <div className='workout-program'>
             <label><h3> Workout Program Checklist </h3></label>
             <div className="workout-container">
             <input type="text" placeholder="Bench press" name="Bench press" value="Bench Press"/>
             <input type="text" placeholder="Cable Row" name="Cable Row" value="Cable Row" />
             <input type="text" placeholder="Assisted Chin Ups" name="Assisted Chin Ups" value="Assisted Chin Ups"/>
             </div>
            </div>
    );
   };
export default WorkoutProgram;