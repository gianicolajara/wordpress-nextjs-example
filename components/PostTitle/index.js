import PropTypes from "prop-types";

const PostTitle = ({ children }) => {
  return <h1 className="text-4xl lg:text-6xl font-bold py-10">{children}</h1>;
};

PostTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PostTitle;
