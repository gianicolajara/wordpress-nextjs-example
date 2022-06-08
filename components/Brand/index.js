import PropTypes from "prop-types";
import Link from "next/link";

const Brand = ({ title = "", color = "text-black" }) => {
  return (
    <Link href="/" passHref>
      <a>
        <h2 className={`font-bold text-2xl lg:text-3xl ${color}`}>{title}</h2>
      </a>
    </Link>
  );
};

Brand.propTypes = {
  title: PropTypes.string,
};

export default Brand;
