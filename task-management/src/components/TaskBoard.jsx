import React, { useState, useEffect } from 'react';
import TaskCard from './TaskCard';
import { fetchTasks, updateTaskStatus } from '../services/api';

const TaskBoard = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks().then(data => setTasks(data));
    }, []);

    const handleDrop = (taskId, newStatus) => {
        updateTaskStatus(taskId, newStatus).then(() => {
            setTasks(tasks.map(task => 
                task.id === taskId ? { ...task, status: newStatus } : task
            ));
        });
    };

    return (
        <div className="task-board">
            {['To Do', 'In Progress', 'Done'].map(status => (
                <div key={status} className="task-column" onDrop={(e) => {
                    e.preventDefault();
                    const taskId = e.dataTransfer.getData('taskId');
                    handleDrop(taskId, status);
                }} onDragOver={(e) => e.preventDefault()}>
                    <h2>{status}</h2>
                    {tasks.filter(task => task.status === status).map(task => (
                        <TaskCard key={task.id} task={task} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default TaskBoard;