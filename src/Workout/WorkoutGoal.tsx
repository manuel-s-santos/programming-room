import React, { useState} from "react";
import { WorkoutList } from "./interface";
      
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
interface Props {
  goal: WorkoutList;
  completeGoal(goalNameToDelete:string): void;
}

const WorkoutGoal = ({ goal, completeGoal }: Props) => {
  return (
    <div className="goal">
      <div className="content">
        <span>{goal.goalName}</span>
        <span>{goal.reps}</span>
      </div>
      <button
        onClick={() => {
          completeGoal(goal.goalName);
        }}
      >
        ✓
      </button>
    </div>
  );
};
export default WorkoutGoal;