const url = process.env.NEXT_PUBLIC_URL_API;

const fetchApi = async (query, variables) => {
  const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
  };

  const res = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();

  if (json.errors) {
    throw new Error("Failed to fetch api", json.errors);
  }

  return json.data;
};

export const getSettingsBlog = async () => {
  const query = `
        {
            generalSettings {
                url
                title
                timezone
                timeFormat
                startOfWeek
                language
                description
                dateFormat
            }
        }
    `;

  const data = await fetchApi(query);

  return data?.generalSettings;
};

export const getMenus = async () => {
  const query = `
    query menu {
      menus(where: {slug: "mmenu"}) {
        edges {
          node {
            menuItems {
              edges {
                node {
                  id
                  label
                }
              }
            }
          }
        }
      }
    }
  `;

  const data = await fetchApi(query);

  return data?.menus.edges[0].node.menuItems.edges;
};

export const getTypesCoffee = async () => {
  const query = `
    query typesCoffe {
      typesCoffee {
        edges {
          node {
            title
            id
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
            excerpt
          }
        }
      }
    }
  `;

  const data = await fetchApi(query);

  return data?.typesCoffee.edges;
};

export const getAboutUs = async () => {
  const query = `
    query aboutUs {
      aboutsUs {
        edges {
          node {
            title
            id
            excerpt
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
          }
        }
      }
    }
  `;

  const data = await fetchApi(query);

  return data?.aboutsUs.edges[0].node;
};

export const getHeroe = async () => {
  const query = `
    query getHeroe {
      heroes {
        edges {
          node {
            id
            title
            excerpt
            featuredImage {
              node {
                altText
                id
                sourceUrl
              }
            }
          }
        }
      }
    }
  `;

  const data = await fetchApi(query);

  return data?.heroes.edges[0].node;
};

export const getBlogsToHomePage = async () => {
  const query = `
    {
        posts(first: 5, where: {orderby: {field: DATE, order: DESC}}) {
          edges {
            node {
              title
              excerpt
              date
              id
              slug
              tags {
                edges {
                  node {
                    id
                    name
                    slug
                  }
                }
              }
              featuredImage {
                node {
                  altText
                  sourceUrl
                }
              }
              categories {
                edges {
                  node {
                    name
                    slug
                    id
                  }
                }
              }
            }
          }
        }
      }
  `;

  const data = await fetchApi(query);

  return data?.posts.edges;
};

export const getPostData = async (id = "") => {
  if (!id) return;

  const query = `
     query getPostData($id: ID!) {
      post(idType: SLUG, id: $id) {
        author {
          node {
            firstName
            lastName
            id
          }
        }
        title
        date
        content
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
        slug
        tags {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    }
  `;

  const data = await fetchApi(query, { id });

  return data?.post;
};

export const getAllSlugsFromPost = async () => {
  const query = `
    {
      posts {
        edges {
          node {
            slug
          }
        }
      }
    }
  `;

  const data = await fetchApi(query);

  return data?.posts.edges;
};

export const getMoreBlogsAndBlog = async (slug = "") => {
  if (!slug) return [];

  const query = `
   
               query getPost($id: ID!){
          post(idType: SLUG, id:$id ) {
              author {
                node {
                  firstName
                  lastName
                  id
                }
              }
              title
              date
              content
              featuredImage {
                node {
                  altText
                  sourceUrl
                }
              }
              slug
              tags {
                edges {
                  node {
                    id
                    name
                  }
                }
              }
            }
         posts(first: 3, where: {orderby: {field: DATE, order: DESC}}) {
            edges {
              node {
                title
                excerpt
                date
                id
                slug
                tags {
                  edges {
                    node {
                      id
                      name
                      slug
                    }
                  }
                }
                featuredImage {
                  node {
                    altText
                    sourceUrl
                  }
                }
                categories {
                  edges {
                    node {
                      name
                      slug
                      id
                    }
                  }
                }
              }
            }
          }
        }
  `;

  const variables = { id: slug };

  const data = await fetchApi(query, variables);

  let posts = data?.posts.edges;

  let filter = posts.filter(({ node }) => node.slug !== slug);
  if (filter.length >= 3) {
    filter = filter.slice(0, 2);
  }

  return {
    post: data?.post || [],
    posts: filter,
  };
};

export const getCountOfPost = async () => {
  const query = `
    query getPostPagination($id:String){
      posts(first:5, after: $id) {
        pageInfo {
          total
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `;

  const data = await fetchApi(query);

  return data?.posts;
};

export const offSetPagination = async (offset = 0, size = 5) => {
  const query = `
     query getPostPagination($offset:Int!,$size:Int!){
      posts(first: 5, where: {offsetPagination: {offset: $offset, size: $size}}) {
      pageInfo {
            offsetPagination {
                hasMore
                hasPrevious
                total
            }
        }
        edges {
              node {
                title
                excerpt
                date
                id
                slug
                tags {
                  edges {
                    node {
                      id
                      name
                      slug
                    }
                  }
                }
                featuredImage {
                  node {
                    altText
                    sourceUrl
                  }
                }
                categories {
                  edges {
                    node {
                      name
                      slug
                      id
                    }
                  }
                }
              }
            }
          
      }
    }
  `;

  const variables = {
    offset: (offset - 1) * size,
    size,
  };

  const data = await fetchApi(query, variables);

  return data?.posts;
};
