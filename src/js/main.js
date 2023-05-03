import Task from "./task";

const fooTask = Task();
fooTask.addTitle("Clean");
console.log(fooTask.getTitle());
fooTask.addDescription("Clean House");

const subBtn = document.querySelector("#test");

subBtn.addEventListener("click", () => {
  fooTask.addTitle(prompt());
  console.log(fooTask.getTitle());
});
