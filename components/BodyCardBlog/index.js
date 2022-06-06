import Link from "next/link";
import Button from "../Button";
import Subtitle from "../Subtitle";
import PropTypes from "prop-types";
import { miliToHumanDate } from "../../lib/date.utils";

const BodyCardBlog = ({ title = "", date = "", slug = "", content = "" }) => {
  return (
    <div className="flex flex-col justify-between gap-2 p-3 h-full w-full">
      <div className="flex flex-col gap-2">
        <Subtitle>{title}</Subtitle>
        <time dateTime={date}>{miliToHumanDate(new Date(date).getTime())}</time>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      <Link href={`/post/${slug}`} passHref>
        <a>
          <Button>Read More...</Button>
        </a>
      </Link>
    </div>
  );
};

BodyCardBlog.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  slug: PropTypes.string,
  content: PropTypes.string,
};

export default BodyCardBlog;
