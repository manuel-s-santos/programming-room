import React, {useState, ChangeEvent} from "react";
import WorkoutGoal from './WorkoutGoal';
import  './workout.css';
import { WorkoutList } from "./interface";

const WorkoutProgram = () => {
    const [goal, setGoal]=  useState<string> ("");
    const [reps, setReps] = useState<number>(3);
    const [workoutGoal, setWorkoutGoal] = useState<WorkoutList[]>([]);
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

  {/* 
     const addGoal = (): void => {
        const newGoal = { goalName: goal, reps: reps };
        setWorkoutGoal([...workoutGoal, newGoal]);
        setGoal("");
        setReps(3);
    };
*/}
        const completeGoal = (goalNameToDelete: string): void => {
            setWorkoutGoal(
                workoutGoal.filter((goal) => {
                    return goal.goalName != goalNameToDelete;
                })
            );
        };

    return (
        <><div className='workout-program'>
            <label><h3> Workout Program Checklist </h3></label>
            <div className="workout-container">
                <input type="text" placeholder="Bench press" value={goal} onChange={handleChange} />
                <input type="text" placeholder="Cable Row" value={goal} onChange={handleChange} />
                <input type="text" placeholder="Assisted Chin Ups" value={goal} onChange={handleChange} />
            </div>

            {/* <button onClick={addGoal}>Add New </button> */}

        </div><div className="workoutList">
                {workoutGoal.map((goal: WorkoutList, key: number) => {
                    return;
                    // <WorkoutGoal key={key} goal={goal} completeGoal={completeGoal} />;
                })}
            </div></>
    );
   };
export default WorkoutProgram;