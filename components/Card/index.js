import PropTypes from "prop-types";
import Image from "next/image";
import Subtitle from "../Subtitle";

const Card = ({ image = "", title = "", description = "" }) => {
  return (
    <article className="w-full lg:w-[300px] min-h-[500px] shadow-md flex flex-col relative">
      <div className="w-full h-[250px] relative">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-5 flex flex-col gap-3">
        <Subtitle>{title}</Subtitle>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </article>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Card;
