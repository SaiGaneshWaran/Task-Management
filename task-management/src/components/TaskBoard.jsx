import { TaskColumn } from './TaskColumn';
import { AddTaskForm } from './AddTaskForm';
import { useTasks } from '../context/TaskContext';

export const TaskBoard = () => {
  const { tasks, loading, error } = useTasks();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const columns = {
    TODO: tasks.filter(task => task.status === 'TODO'),
    IN_PROGRESS: tasks.filter(task => task.status === 'IN_PROGRESS'),
    DONE: tasks.filter(task => task.status === 'DONE')
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Task Management Board</h1>
      <AddTaskForm />
      <div className="grid grid-cols-3 gap-4 mt-4">
        <TaskColumn title="To Do" tasks={columns.TODO} status="TODO" />
        <TaskColumn title="In Progress" tasks={columns.IN_PROGRESS} status="IN_PROGRESS" />
        <TaskColumn title="Done" tasks={columns.DONE} status="DONE" />
      </div>
    </div>
  );
};