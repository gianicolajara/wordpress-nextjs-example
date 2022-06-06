import Subtitle from "../Subtitle";
import { miliToHumanDate } from "../../lib/date.utils";
import P from "../P";
import Image from "next/image";
import PostTitle from "../PostTitle";

const PostHeader = ({
  title = "",
  date = "",
  author = "",
  categories = "",
  coverImage = "",
  imageData = null,
}) => {
  return (
    <div>
      <div className="mb-5">
        <PostTitle>{title || "No title"}</PostTitle>
        <P>
          <span className="font-bold">Author:</span> {author || "Anonymous"}
        </P>
        <time dateTime={date}>
          {miliToHumanDate(new Date(date).getTime()) || "No Date"}
        </time>
      </div>
      {imageData && (
        <div className="w-full h-[500px] relative">
          <Image
            src={imageData?.sourceUrl || ""}
            alt={imageData?.altText || ""}
            layout="fill"
            objectFit="cover"
            title={imageData?.altText || ""}
          />
        </div>
      )}
    </div>
  );
};

export default PostHeader;
