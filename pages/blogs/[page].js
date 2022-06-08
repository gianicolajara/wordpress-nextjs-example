import Head from "next/head";
import CardBlogOnly from "../../components/CardBlogOnly";
import Pagination from "../../components/Pagination";
import SectionApp from "../../components/Section";
import { getCountOfPost, offSetPagination } from "../../lib/api";

const numberOfPostPerPage = 5;

const BlogPage = ({ pageInfo, posts }) => {
  return (
    <>
      <Head>
        <title>Coffee Blog</title>
      </Head>
      <SectionApp>
        <div>
          <div className="grid grid-cols-[repeat(auto-fit,_1fr] lg:grid-cols-[repeat(auto-fit,_minmax(350px,450px))] gap-5">
            {posts &&
              posts.map(({ node }) => (
                <CardBlogOnly
                  key={node?.id}
                  title={node?.title}
                  categoryData={node?.categories.edges[0]?.node}
                  imageData={
                    node?.featuredImage?.node || {
                      sourceUrl: `${process.env.NEXT_PUBLIC_PATH_URL}/images/heroe.jpg`,
                      altText: "image default coffee",
                    }
                  }
                  content={node?.excerpt}
                  date={node?.date}
                  slug={node?.slug}
                />
              ))}
          </div>

          <div className="py-5">
            <Pagination
              numberOfPages={numberOfPostPerPage}
              totalItems={pageInfo?.offsetPagination?.total}
              prev={pageInfo?.offsetPagination?.hasPrevious}
              next={pageInfo?.offsetPagination?.hasMore}
              pagePath="/blogs/"
            />
          </div>
        </div>
      </SectionApp>
    </>
  );
};

export const getStaticPaths = async () => {
  const { pageInfo } = await getCountOfPost();

  const countPosts = pageInfo.total;
  const totalPages = Math.ceil(countPosts / numberOfPostPerPage);

  const paths = Array.from({ length: totalPages }, (_, index) => {
    return { params: { page: (index + 1).toString() } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { page } = context.params;
  const { pageInfo, edges } = await offSetPagination(
    Number(page),
    numberOfPostPerPage
  );

  return {
    props: {
      pageInfo,
      posts: edges,
    },
  };
};

export default BlogPage;
