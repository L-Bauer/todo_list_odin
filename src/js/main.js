const taskFactory = () => {
  const addTask = (titleText) => {
    const newTitle = title(titleText);
    newTitle.addTitle(titleText);
  };

  const getTitle = () => "Test";

  return { addTask, getTitle };
};
