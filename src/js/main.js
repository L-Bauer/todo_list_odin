import Task from "./task";

const fooTask = Task();
fooTask.addTitle("Clean");
console.log(fooTask.getTitle());
fooTask.addDescription("Clean House");
