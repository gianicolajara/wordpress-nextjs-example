import PropTypes from "prop-types";

const Button = ({ children, onClick = () => {} }) => {
  return (
    <button
      className="bg-black text-white w-max px-4 py-3 font-bold hover:opacity-50 transition duration-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
