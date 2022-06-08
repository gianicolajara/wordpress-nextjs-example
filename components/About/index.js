import SectionApp from "../Section";
import Subtitle from "../Subtitle";
import PropTypes from "prop-types";
import Image from "next/image";

const About = ({ title = "", content = "", imageData = {} }) => {
  return (
    <SectionApp>
      <div className="grid grid-cols-1 grid-rows-[repeat(2,_300px)] lg:grid-cols-2 lg:grid-rows-[300px] gap-10">
        <div className="flex flex-col gap-3 justify-center">
          <Subtitle>{title}</Subtitle>

          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        <div className="relative">
          <Image
            src={imageData.sourceUrl}
            alt={imageData.altText}
            layout="fill"
            objectFit="cover"
            title={imageData.altText}
          />
        </div>
      </div>
    </SectionApp>
  );
};

About.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  imageData: PropTypes.object,
};

export default About;
