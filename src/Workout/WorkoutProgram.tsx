import React, {useState, ChangeEvent} from "react";
// import WorkoutGoal from './WorkoutGoal';
import  './workout.css';

const WorkoutProgram = () => {
    const [benchPress, setBenchPress]=  useState<string> ("");
    const [cableRow, setCableRow]=  useState<string> ("");
    const [chinUps, setChinUps]=  useState<string> ("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === "benchPress"){
            setBenchPress(event.target.value)
        } else {
            alert('Congratulations!');
            //setReps(Number(event.target.value));
        }
        };

    return (
        <div className='workout-program'>
             <label><h3> Workout Program Checklist </h3></label>
             <div className="workout-container">
             <input type="text" placeholder="Bench press" value={benchPress} onChange={handleChange} />
             <input type="text" placeholder="Cable Row" value={cableRow} onChange={handleChange} />
             <input type="text" placeholder="Assisted Chin Ups" value={chinUps} onChange={handleChange} />
             </div>
            </div>
    );
   };
export default WorkoutProgram;