import PropTypes from "prop-types";
import { useContext } from "react";
import { ConfigContext } from "../../contexts/config.context";
import Brand from "../Brand";
import ListMenuItems from "../ListMenuItems";
import SkeletonMenu from "../Loders/SkeletonMenu";
import SkeletonTitle from "../Loders/SkeletonTitle";

const Menu = () => {
  const { config, menuItems } = useContext(ConfigContext);

  return (
    <nav className="w-full h-[75px] flex items-center px-10 justify-between sticky top-0 left-0 z-[999] bg-white">
      <div className="w-max">
        {config ? <Brand title={config.title} /> : <SkeletonTitle />}
      </div>
      <div className="flex gap-3">
        {menuItems ? <ListMenuItems menuItems={menuItems} /> : <SkeletonMenu />}
      </div>
    </nav>
  );
};

Menu.propTypes = {
  settingBlog: PropTypes.object,
};

export default Menu;
