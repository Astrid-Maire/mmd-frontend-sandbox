const If = ({ children, condition }) => {
  return <>{condition && children}</>;
};

export default If;
