const Tag = ({ title = "" }) => {
  return (
    <div className="py-1 px-3 bg-black text-white cursor-pointer hover:opacity-50 transition-all">
      {title}
    </div>
  );
};

export default Tag;
