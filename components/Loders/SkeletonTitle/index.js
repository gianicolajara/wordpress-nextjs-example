import ContentLoader from "react-content-loader";

const SkeletonTitle = (props) => (
  <ContentLoader
    speed={2}
    width={204}
    height={47}
    viewBox="0 0 204 47"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="204" height="47" />
  </ContentLoader>
);

export default SkeletonTitle;
