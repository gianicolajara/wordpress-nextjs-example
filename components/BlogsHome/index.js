import PropTypes from "prop-types";
import ListBlog from "../ListBlog";
import SectionApp from "../Section";
import Subtitle from "../Subtitle";

const BlogsHome = ({ blogs }) => {
  return (
    <SectionApp>
      <div className="flex flex-col gap-1 ">
        <Subtitle>Coffee Blog</Subtitle>
        {blogs && <ListBlog blogs={blogs} />}
      </div>
    </SectionApp>
  );
};

BlogsHome.propTypes = {
  blogs: PropTypes.array,
};

export default BlogsHome;
