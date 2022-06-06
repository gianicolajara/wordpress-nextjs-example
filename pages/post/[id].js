import PostBody from "../../components/PostBody.js";
import SectionApp from "../../components/Section";
import { getAllSlugsFromPost, getMoreBlogsAndBlog } from "../../lib/api";
import { useRouter } from "next/router";
import PostHeader from "../../components/PostHeader.js/index.js";
import PostTags from "../../components/PostTags/index.js";
import Button from "../../components/Button/index.js";
import MenuItem from "../../components/MenuItem/index.js";
import MorePosts from "../../components/MorePosts/index.js";

const Post = ({ post, posts }) => {
  const router = useRouter();

  if (!router.isFallback && !post) {
    return <>404 not found</>;
  }

  const handleBack = () => {
    router.back();
  };

  return (
    <SectionApp>
      {router.isFallback ? (
        <>...Loading</>
      ) : (
        <>
          <div className="flex items-center gap-2">
            <Button onClick={handleBack}>&lt;</Button>
            <small>
              <MenuItem url={`/`}>Home</MenuItem> / Posts /{" "}
              {post?.title || "No Title"}
            </small>
          </div>
          <PostHeader
            title={post?.title}
            date={post?.date}
            author={post?.author.node.firstName}
            imageData={
              post?.featuredImage?.node || {
                sourceUrl: `${process.env.NEXT_PUBLIC_PATH_URL}/images/heroe.jpg`,
                altText: "image default coffee",
              }
            }
          />
          <PostTags tags={post?.tags.edges} />
          <PostBody content={post.content} />
          <MorePosts posts={posts} />
        </>
      )}
    </SectionApp>
  );
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const { posts, post } = await getMoreBlogsAndBlog(params.id);

  return {
    props: {
      post,
      posts,
    },
  };
};

export const getStaticPaths = async () => {
  const allSlugs = await getAllSlugsFromPost();

  return {
    paths: allSlugs.map(({ node }) => `/post/${node.slug}`) || [],
    fallback: true,
  };
};

export default Post;
