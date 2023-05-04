import Task from "./task";
import Project from "./project";

const projects = [];

function createProject(title) {
  const project = Project(title);
  projects.push(project);
}

createProject("One");
createProject("Two");

projects.forEach((foo) => { console.log(foo.getTitle()); });

const found = projects.find((foo) => foo.getTitle() === "One");
found.addTask("Clean");
found.addTask("Magic");

found.getTaskList().forEach((doo) => console.log(doo.getTitle()));
