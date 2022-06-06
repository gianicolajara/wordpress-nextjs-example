import Wrapper from "../Wrapper";
import PropTypes from "prop-types";

const SectionApp = ({ children }) => {
  return (
    <section className="py-10">
      <Wrapper>{children}</Wrapper>
    </section>
  );
};

SectionApp.propTypes = {
  children: PropTypes.node,
};

export default SectionApp;
