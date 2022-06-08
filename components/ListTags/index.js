import P from "../P";
import Tag from "../Tag";

const ListTags = ({ tags = [] }) => {
  return (
    <>
      {tags.length > 0 && (
        <div className="flex gap-2 py-2 items-center flex-wrap">
          <P>Tags:</P>
          {tags.map(({ node }) => (
            <Tag key={node.id} title={node.name} />
          ))}
        </div>
      )}
    </>
  );
};

export default ListTags;
