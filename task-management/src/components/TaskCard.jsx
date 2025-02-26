import React from 'react';

const TaskCard = ({ task }) => {
    const handleDragStart = (e) => {
        e.dataTransfer.setData('taskId', task.id);
    };

    return (
        <div className="task-card" draggable onDragStart={handleDragStart}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
        </div>
    );
};

export default TaskCar;