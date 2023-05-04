import Task from "./task";

export default (title) => {
  const tasks = [];

  const getTitle = () => title;

  const addTask = (task) => {
    const newTask = Task(task);
    tasks.push(newTask);
  };

  const getTaskList = () => tasks;

  return {
    getTitle, addTask, getTaskList,
  };
};
