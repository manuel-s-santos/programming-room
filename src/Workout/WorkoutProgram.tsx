import React, {useState, ChangeEvent} from "react";
// import WorkoutGoal from './WorkoutGoal';
import  './workout.css';
import WorkoutList from "./WorkoutList";

const WorkoutProgram = () => {
    const [goal, setGoal]=  useState<string> ("");
    const [reps, setReps] = useState<number>(3);
    // const [cableRow, setCableRow]=  useState<string> ("");
    // const [chinUps, setChinUps]=  useState<string> ("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === "goal"){
            setGoal(event.target.value)
        } else {
            // alert('Congratulations!');
            setReps(Number(event.target.value));
        }
        };

    const addGoal = (): void => {
        const newGoal = { goalName: goal, reps: reps };
        setWorkoutGoal([...workoutList, newGoal]);
        setGoal("");
        setReps(0);
    };
        const completeGoal = (goalNameToDelete: string): void => {
            set workoutList(
                workoutList.filter((task) => {
                    return goal.goalName != goalNameToDelete;
                })
            );

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