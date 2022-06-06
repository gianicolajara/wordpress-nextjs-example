import CardBlog from "../CardBlog";
import CardBlogOnly from "../CardBlogOnly";
import SectionApp from "../Section";
import Subtitle from "../Subtitle";

const MorePosts = ({ posts }) => {
  return (
    <SectionApp>
      <div className="mb-5">
        <Subtitle>More Posts</Subtitle>
      </div>
      <div className="flex flex-col lg:flex-row gap-5">
        {posts &&
          posts.length > 0 &&
          posts.map((post) => (
            <CardBlogOnly
              key={post?.node.id}
              title={post?.node.title}
              categoryData={post?.node.categories.edges[0]?.node}
              imageData={
                post?.node.featuredImage?.node || {
                  sourceUrl: `${process.env.NEXT_PUBLIC_PATH_URL}/images/heroe.jpg`,
                  altText: "image default coffee",
                }
              }
              content={post?.node.excerpt}
              date={post?.node.date}
              slug={post?.node.slug}
            />
          ))}
      </div>
    </SectionApp>
  );
};

export default MorePosts;
