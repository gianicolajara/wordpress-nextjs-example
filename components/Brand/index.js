import PropTypes from "prop-types";
import { AiOutlineCoffee } from "react-icons/ai";
import Link from "next/link";

const Brand = ({ title = "", color = "text-black" }) => {
  return (
    <Link href="/" passHref>
      <a>
        <div className="flex gap-3">
          <AiOutlineCoffee size={25} className={`${color}`} />
          <h2 className={`font-bold text-3xl ${color}`}>{title}</h2>
        </div>
      </a>
    </Link>
  );
};

Brand.propTypes = {
  title: PropTypes.string,
};

export default Brand;
