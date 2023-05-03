export default () => {
  const greet = () => {
    console.log("Hello World!");
  };

  const leave = () => {
    console.log("Bye Bye");
  };

  return { greet, leave };
};
