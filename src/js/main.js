import titleFactory from "./parts";

const projectFactory = (title) => {
  console.log(`Project ${title}`);
  titleFactory(title);
};

const taskFactory = (title) => {
  console.log(`Task: ${title}`);
  titleFactory(title);
};

projectFactory("default");
taskFactory("default");

export default function printMe() {
  console.log("I get called from print.js!");
}
