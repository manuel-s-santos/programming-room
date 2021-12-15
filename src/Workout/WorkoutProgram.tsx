import React, {useState, ChangeEvent} from "react";
import WorkoutGoal from './WorkoutGoal';
import  './workout.css';
import { WorkoutList } from "./interface";


const WorkoutArray :WorkoutList[] =  [
    {goalName: 'Bench press',
    sets: 3,
    reps: 10,
    weight: 20,
    notes: 'Explosive push up and slow drop down' ,
    completed: false,

},

    {goalName: 'Cable row',
    sets: 3, reps: 10,
    weight: 10,
    notes: '3 secs. up, 1 sec. hold, 3 secs. down', 
    completed: false,
}
];

const WorkoutProgram = () => {
    const [goal, setGoal]=  useState<string> ("");
    const [reps, setReps] = useState<number>(3);
    const [workoutGoal, setWorkoutGoal] = useState<WorkoutList[]>(WorkoutArray);
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
            {/* <div className="workout-container">
                <input type="text" placeholder="Bench press" value={goal} onChange={handleChange} />
                <input type="text" placeholder="Cable Row" value={goal} onChange={handleChange} />
                <input type="text" placeholder="Assisted Chin Ups" value={goal} onChange={handleChange} />
    </div> */}
    {workoutGoal.map((goal: WorkoutList, key: number) => 
                    <WorkoutGoal key={key} goal={goal} completeGoal={completeGoal} />
                )}
        </div>
        {/* <div className="workoutList">
                {workoutGoal.map((goal: WorkoutList, key: number) => 
                    <WorkoutGoal key={key} goal={goal} completeGoal={completeGoal} />
                )}
            </div> */}
            </>
    );
   };
export default WorkoutProgram;