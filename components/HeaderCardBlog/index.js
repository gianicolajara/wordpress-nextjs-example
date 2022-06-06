import Image from "next/image";
import PropTypes from "prop-types";

const HeaderCardBlog = ({ category = "", url = "", alt = "" }) => {
  return (
    <div className="w-full min-h-[200px] relative">
      <div className="absolute top-0 right-0 bg-black w-max z-10 text-white p-3">
        {category}
      </div>
      <Image src={url} alt={alt} layout="fill" title={alt} objectFit="cover" />
    </div>
  );
};

HeaderCardBlog.propTypes = {
  category: PropTypes.string,
  url: PropTypes.string,
  alt: PropTypes.string,
};

export default HeaderCardBlog;
