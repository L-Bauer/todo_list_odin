// Import our custom CSS
import "../scss/styles.scss";
import { createTask, showAllTasks } from "./main";

const submitBtn = document.querySelector("#test");

submitBtn.addEventListener("click", () => {
  createTask(prompt(), prompt());
  showAllTasks();
});
