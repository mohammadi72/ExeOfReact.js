const Wrapper = (WrappedComponent, className) => {
  return (props) => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};
export default Wrapper;
// const Wrapper = (props) => {
//   return <div className={props.Class}>{props.children}</div>;
// };
// export default Wrapper;
