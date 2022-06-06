import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonMenu = (props) => (
  <ContentLoader
    speed={2}
    width={245}
    height={10}
    viewBox="0 0 245 10"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="1" y="4" rx="0" ry="0" width="66" height="6" />
    <rect x="82" y="3" rx="0" ry="0" width="66" height="6" />
    <rect x="164" y="3" rx="0" ry="0" width="66" height="6" />
  </ContentLoader>
);

export default SkeletonMenu;
