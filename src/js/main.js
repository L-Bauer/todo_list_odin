const title = (name) => {
  // This factory will contain functions related to the title of the
  // project or task.
  const addTitle = (text) => {
    // Add title to new todo
    console.log(`Add is the title: ${text}`);
  };

  const getName = () => name;

  const editTitle = (text) => {
    console.log(`Edit title ${text}`);
  };

  return { addTitle, editTitle, getName };
};

const taskFactory = () => {
  const addTask = (titleText) => {
    const newTitle = title(titleText);
    newTitle.addTitle(titleText);
    console.log(newTitle.getName());
  };

  const getTitle = () => "Test";

  return { addTask, getTitle };
};

const foo = taskFactory();

foo.addTask("Magic");
