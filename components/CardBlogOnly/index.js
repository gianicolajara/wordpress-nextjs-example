import PropTypes from "prop-types";
import HeaderCardBlog from "../HeaderCardBlog";
import BodyCardBlog from "../BodyCardBlog";

const CardBlogOnly = ({
  imageData = null,
  title = "",
  content = "",
  date = "",
  slug = "",
  categoryData = null,
}) => {
  return (
    <article className="flex flex-col w-full shadow-md rounded-lg overflow-hidden">
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

CardBlogOnly.propTypes = {
  imageData: PropTypes.object,
  title: PropTypes.string,
  content: PropTypes.string,
  date: PropTypes.string,
  slug: PropTypes.string,
  categoryData: PropTypes.object,
};

export default CardBlogOnly;
