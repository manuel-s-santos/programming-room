import React, { useState, useEffect} from "react";

const WorkoutGoal  = () => {
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
}

export default WorkoutGoal;