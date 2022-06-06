import PropTypes from "prop-types";
import Link from "next/link";

const MenuItem = ({ children, url = "", color = "text-black" }) => {
  return (
    <Link href={url}>
      <a className={`${color} hover:underline `}>{children}</a>
    </Link>
  );
};

MenuItem.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node,
  color: PropTypes.string,
};

export default MenuItem;
