import PropTypes from "prop-types";

const ButtonPagination = ({
  children,
  onClick = () => {},
  bg = "bg-black",
}) => {
  return (
    <div
      className={`p-2 bg-black text-white cursor-pointer hover:opacity-50 transition-all ${bg}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

ButtonPagination.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  bg: PropTypes.string,
};

export default ButtonPagination;
