import styled from 'styled-components';
import React, {useState, useEffect} from "react";
import WorkoutItem from './WorkoutGoal';

const WorkoutProgram = (props: { items: any[]; onDeleteItem: any; }) => {
    return (
      <ul className="workout-prog">
        {props.items.map((workout: { id: any; text: any; }) => (
          <WorkoutItem
            key={workout.id}
            id={workout.id}
            onDelete={props.onDeleteItem}
          >
            {workout.text}
            </WorkoutItem>
        ))}
      </ul>
    );
  };
  
export default WorkoutProgram;