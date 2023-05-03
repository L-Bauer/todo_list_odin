export default () => {
  let taskTitle;

  const addTitle = (title) => {
    taskTitle = title;
  };

  const getTitle = () => taskTitle;

  const addDescription = (description) => {
    console.log(`Description: ${description}`);
  };

  return { addTitle, addDescription, getTitle };
};
