import styles from "../../styles/Post.module.css";
import PropTypes from "prop-types";

const PostBody = ({ content }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: content }}
      className={styles.content}
    />
  );
};

PostBody.propTypes = {
  content: PropTypes.string.isRequired,
};

export default PostBody;
