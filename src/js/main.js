import addTitle from "./parts";

const projectFactory = (title) => {
  console.log(`Project ${title}`);
  addTitle(title);
};

const taskFactory = (title) => {
  console.log(`Task: ${title}`);
  addTitle(title);
};

projectFactory("default");
taskFactory("default");

export default function printMe() {
  console.log("I get called from print.js!");
}
