import Task from "./task";

const projects = [];
const tasks = [];

function createTask(name, project) {
  const newTask = Task(name);
  newTask.setProject(project);
  if (!projects.includes(project)) {
    projects.push(project);
  }
  tasks.push(newTask);
}

function showAllTasks() {
  tasks.forEach((value) => console.log(value.getTitle()));
}

export { createTask, showAllTasks };
