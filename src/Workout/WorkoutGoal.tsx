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
          
        <table>
        <td><span>{goal.goalName}</span></td>
        <td><span> {goal.sets}</span></td>
        <td><span> {goal.reps}</span> </td>
        <td><span> {goal.weight}</span> </td>
        <td><span> {goal.notes}</span> </td>
        <td><span><input type="checkbox" onClick={() => {completeGoal()}}></input></span></td>
        </table>

          {/* <button
        onClick={() => {
          completeGoal()}}
      >
        {goal.completed? '✔︎': '❐'}
      </button> */}

      </div>
    </div>
  );
};
export default WorkoutGoal;