import React, {useState, ChangeEvent, useEffect} from "react";
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
},
    {goalName: 'Assisted Chin ups',
    sets: 3, reps: 10,
    weight: 30,
    notes: 'The greater the weights, the easier the chin ups', 
    completed: false,
}
];

const WorkoutProgram = () => {
    const [goal, setGoal]=  useState<string> ("");
    const [reps, setReps] = useState<number>(3);
    const [workoutGoal, setWorkoutGoal] = useState<WorkoutList[]>(WorkoutArray);

        const completeGoal = (key:number): void => {
            setWorkoutGoal(
                workoutGoal.map((goal, index) => {
                    return {...goal, completed: goal.completed?true: key === index}
                })
            );
        };

        useEffect(()=> {
            const incompleteLength = workoutGoal.filter(goal => !goal.completed).length;
                if (incompleteLength===0){
                    alert('Congrats!')
                }
        },[workoutGoal] );


    return (
        <><div className='workout-program'>
            <label><h3> Workout Program Checklist </h3></label>
            
    {workoutGoal.map((goal: WorkoutList, key: number) => 
                    <WorkoutGoal key={key} goal={goal} completeGoal={()=>
                        completeGoal(key)
                     } />
                )}
        </div>
        </>
    );
   };
export default WorkoutProgram;