import PropTypes from "prop-types";
import HeaderCardBlog from "../HeaderCardBlog";
import BodyCardBlog from "../BodyCardBlog";

const CardBlog = ({
  imageData = null,
  title = "",
  content = "",
  date = "",
  slug = "",
  categoryData = null,
}) => {
  return (
    <article className="flex flex-col flex-shrink-0 max-w-[100%] lg:max-w-[calc(50%-20px)] w-full shadow-md rounded-lg overflow-hidden">
      {imageData && categoryData && (
        <HeaderCardBlog
          alt={imageData?.altText}
          category={categoryData?.name}
          url={imageData?.sourceUrl}
        />
      )}
      <BodyCardBlog title={title} content={content} date={date} slug={slug} />
    </article>
  );
};

CardBlog.propTypes = {
  imageData: PropTypes.object,
  title: PropTypes.string,
  content: PropTypes.string,
  date: PropTypes.string,
  slug: PropTypes.string,
  categoryData: PropTypes.object,
};

export default CardBlog;
