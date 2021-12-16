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
      <table> <thead>
      <tr>
        <th>Name:</th>
        <th>Sets:</th>
        <th>Reps:</th>
        <th>Weight:</th>
        <th>Notes:</th>
        <th>Completed?</th>
        </tr>
        </thead>
        <tbody> <tr> 
      
        <td><span>{goal.goalName}</span></td>
        <td><span> {goal.sets}</span></td>
        <td><span> {goal.reps}</span></td>
        <td><span> {goal.weight}</span></td>
        <td><span> {goal.notes}</span></td>
      {/* <button
        onClick={() => {
          completeGoal()}}
      >
        {goal.completed? '✔︎': '❐'}
      </button> */}
      <input type="checkbox" onClick={() => {
          completeGoal()
        }}
      ></input>
            </tr>
      </tbody>
      </table>
      </div>
    </div>
  );
};
export default WorkoutGoal;