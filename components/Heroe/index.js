import Image from "next/image";
import Title from "../Title";
import PropTypes from "prop-types";

const Heroe = ({ title = "", description = "", imageData = {} }) => {
  return (
    <section>
      <div className="w-full h-[calc(100vh-75px)] relative flex justify-center items-center">
        {title && description && (
          <div className="relative z-10 bg-slate-900/80 p-5 rounded-lg max-w-[650px] w-full flex flex-col gap-5">
            <Title color="text-white">{title}</Title>
            <div
              dangerouslySetInnerHTML={{ __html: description }}
              className="text-white"
            />
          </div>
        )}
        <Image
          src={imageData.sourceUrl || ""}
          layout="fill"
          alt="heroe coffee"
          objectFit="cover"
          title={imageData.altText || ""}
        />
      </div>
    </section>
  );
};

Heroe.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageData: PropTypes.object,
};

export default Heroe;
