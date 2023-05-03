import Task from "./task";

const taskFactory = () => {
  // Create new task
  const addTask = (title, description, dueDate, priority) => {
    const newTask = {
      taskTitle: title,
      taskDescription: description,
      taskDueDate: dueDate,
      taskPriority: priority,
    };
    return newTask;
  };

  return { addTask };
};

const fooTask = Task();
fooTask.greet();
fooTask.leave();
