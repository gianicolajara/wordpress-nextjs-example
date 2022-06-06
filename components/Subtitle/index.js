import PropTypes from "prop-types";

const Subtitle = ({ children, color = "text-black" }) => {
  return <h1 className={`text-2xl font-bold ${color}`}>{children}</h1>;
};

Subtitle.propTypes = {
  children: PropTypes.node,
};

export default Subtitle;
