import PropTypes from "prop-types";

const Wrapper = ({ children }) => {
  return <div className="max-w-[999px] w-full m-auto">{children}</div>;
};

Wrapper.propTypes = {
  children: PropTypes.node,
};

export default Wrapper;
