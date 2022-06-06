import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import CardBlog from "../CardBlog";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";

const initialMaxLeftScroll = 0;
const initialMaxWidth = 0;
const initialMargin = 0;

const typesArrow = {
  left: "left",
  right: "right",
  nothing: "nothing",
};

const ListBlog = ({ blogs }) => {
  const [maxLeftScroll, setMaxLeftScroll] = useState(initialMaxLeftScroll);
  const [maxWidth, setMaxWidth] = useState(initialMaxWidth);
  const [margin, setMargin] = useState(initialMargin);
  const [blogCount, setBlogCount] = useState(blogs.length);
  const [hiddenArrow, setHiddenArrow] = useState(typesArrow.left);
  const refContainer = useRef();

  const calculatedMargin = () => {
    if (document.body.clientWidth < 1024) {
      setMargin(20);
    } else {
      setMargin(0);
    }
  };

  const calculatedWidth = () => {
    setMaxLeftScroll(
      refContainer.current.scrollWidth - refContainer.current.clientWidth
    );
    setMaxWidth(refContainer.current.clientWidth);
  };

  const detectingResize = (e) => {
    refContainer.current.scrollLeft = 0;
    calculatedMargin();
    calculatedWidth();
  };

  const handleLeft = () => {
    if (
      refContainer.current.scrollLeft >
      Math.ceil(maxLeftScroll / blogCount + margin)
    ) {
      refContainer.current.scrollLeft -= maxWidth + margin;
      setHiddenArrow(typesArrow.nothing);
    } else {
      refContainer.current.scrollLeft = 0;
      setHiddenArrow(typesArrow.left);
    }
  };

  const handleRight = () => {
    if (
      refContainer.current.scrollLeft <
      maxLeftScroll - Math.ceil(maxLeftScroll / blogCount + margin)
    ) {
      refContainer.current.scrollLeft += maxWidth + margin;
      setHiddenArrow(typesArrow.nothing);
    } else {
      setHiddenArrow(typesArrow.right);
      refContainer.current.scrollLeft = maxLeftScroll;
    }
  };

  const detectingScroll = (e) => {
    if (e.target.scrollLeft <= 0) {
      setHiddenArrow(typesArrow.left);
    } else if (
      e.target.scrollLeft >=
      e.target.scrollWidth - e.target.clientWidth
    ) {
      setHiddenArrow(typesArrow.right);
    } else {
      setHiddenArrow(typesArrow.nothing);
    }
  };

  useEffect(() => {
    const container = refContainer.current || null;
    window.addEventListener("resize", detectingResize);
    container.addEventListener("scroll", detectingScroll);

    calculatedMargin();
    calculatedWidth();

    return () => {
      window.removeEventListener("resize", detectingResize);
      container.removeEventListener("scroll", detectingScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full h-full relative ">
      {hiddenArrow !== typesArrow.left && (
        <div
          className="absolute left-0 top-[50%] translate-y-[-50%] cursor-pointer z-20"
          onClick={handleLeft}
        >
          <HiArrowCircleLeft
            size={45}
            className="text-black/10 hover:text-black transition-all"
          />
        </div>
      )}
      {hiddenArrow !== typesArrow.right && (
        <div
          className="absolute right-0 top-[50%] translate-y-[-50%] cursor-pointer z-20"
          onClick={handleRight}
        >
          <HiArrowCircleRight
            size={45}
            className="text-black/10 hover:text-black transition"
          />
        </div>
      )}
      <div
        className="w-full h-max overflow-x-auto py-5 scroll-smooth scrollbar-hidden"
        ref={refContainer}
      >
        <div className="flex w-full h-full gap-[20px] relative transition-all duration-500 ">
          {blogs &&
            blogs.map((blog) => (
              <CardBlog
                key={blog?.node.id}
                imageData={
                  blog?.node.featuredImage?.node || {
                    sourceUrl: `${process.env.NEXT_PUBLIC_PATH_URL}/images/heroe.jpg`,
                    altText: "image default coffee",
                  }
                }
                title={blog?.node.title}
                content={blog?.node.excerpt}
                date={blog?.node.date}
                slug={blog?.node.slug}
                categoryData={blog?.node.categories.edges[0]?.node}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

ListBlog.propTypes = {
  blogs: PropTypes.array,
};

export default ListBlog;
