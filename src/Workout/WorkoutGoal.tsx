import React, { useState} from "react";
import WorkoutList from "./WorkoutList";
      
/*
const WorkoutGoal = (props: { onDelete: (arg0: any) => void; id: any; children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
    const [workoutGoal, setWorkoutGoal] = useState([
        {name: 'Bench press', id:'g1', sets: 3, reps: 10, weight: 20, notes: 'Explosive push up and slow drop down' },
        {name: 'Cable row', id:'g2', sets: 3, reps: 10, weight: 10, notes: '3 secs. up, 1 sec. hold, 3 secs. down' },
        {name: 'Assisted chin ups', id:'g3', sets: 3, reps: 10, weight: 30, notes: 'The greater the weights, the easier the chin up' }
    ]);

    const deleteItemHandler = (goalId: string) => {
        setWorkoutGoal(doneGoals => {
          const updatedGoals = doneGoals.filter(goal => goal.id !== goalId);
          return updatedGoals;
        });
      };
*/

const WorkoutGoal = (props: { onDelete: (arg0: any) => void; id: any; children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
    const deleteHandler = () => {
        props.onDelete(props.id);
      };
      return (
        <li className="goal" onClick={deleteHandler}>
          {props.children}
        </li>
      );
                }
export default WorkoutGoal;