export default (name) => {
  let assignedProject;
  const getTitle = () => name;

  const addDescription = (description) => {
    console.log(`Description: ${description}`);
  };

  const setProject = (projectName) => {
    assignedProject = projectName;
  };

  const getProject = () => assignedProject;

  return { getTitle, setProject, getProject };
};
