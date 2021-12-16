import React, { useState} from "react";
import { WorkoutList } from "./interface";
      
/*
    const deleteItemHandler = (goalId: string) => {
        setWorkoutGoal(doneGoals => {
          const updatedGoals = doneGoals.filter(goal => goal.id !== goalId);
          return updatedGoals;
        });
      };
*/
interface Props {
  goal: WorkoutList;
  completeGoal:() => void;
}

const WorkoutGoal = ({ goal, completeGoal }: Props) => {
  return (
    <div className="goal">
      <div className="content">
        <span>{goal.goalName}</span>
        <span> {goal.sets}</span>
        <span> {goal.reps}</span>
        <span> {goal.weight}</span>
        <span> {goal.notes}</span>
      </div>
      {/* <button
        onClick={() => {
          completeGoal()
        }}
      >
        {goal.completed? '✔︎': '❐'}
        
      </button> */}
      <input type="checkbox" onClick={() => {
          completeGoal()
        }}
      ></input>
      
    </div>
  );
};
export default WorkoutGoal;