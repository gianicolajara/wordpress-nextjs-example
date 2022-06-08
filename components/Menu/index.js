import PropTypes from "prop-types";
import { menu, title } from "../../lib/config";
import Brand from "../Brand";
import ListMenuItems from "../ListMenuItems";
import Subtitle from "../Subtitle";

const Menu = () => {
  return (
    <nav className="w-full h-[75px] flex items-center px-10 justify-between sticky top-0 left-0 z-[999] bg-white">
      <div className="w-max">
        <Brand title={title} />
      </div>
      <div className="flex gap-3">
        <ListMenuItems menuItems={menu} />
      </div>
    </nav>
  );
};

Menu.propTypes = {
  settingBlog: PropTypes.object,
};

export default Menu;
