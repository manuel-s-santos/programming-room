import React, { useState, useEffect} from "react";

const WorkoutItem = (props: { onDelete: (arg0: any) => void; id: any; children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
    const deleteHandler = () => {
        props.onDelete(props.id);
    }

    return (
        <li className='workout-item' onClick={deleteHandler}>
            {props.children}
        </li>
    );
};

export default WorkoutItem;