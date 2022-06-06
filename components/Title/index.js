import PropTypes from "prop-types";

const Title = ({ children, color = "text-black" }) => {
  return <h1 className={`text-4xl font-bold ${color}`}>{children}</h1>;
};

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;
