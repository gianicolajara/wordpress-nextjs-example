import PropTypes from "prop-types";

const P = ({ children, color = "text-black" }) => {
  return <p className={color}>{children}</p>;
};

P.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
};

export default P;
