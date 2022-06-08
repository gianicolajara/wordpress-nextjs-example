import PropTypes from "prop-types";
import { setUrl } from "../../lib/menu.utils";
import MenuItem from "../MenuItem";

const ListMenuItems = ({ menuItems = [], color = "" }) => {
  return menuItems.map((item) => (
    <MenuItem key={item.id} color={color} url={item.url}>
      {item.label}
    </MenuItem>
  ));
};

ListMenuItems.propTypes = {
  menuItems: PropTypes.array.isRequired,
  color: PropTypes.string,
};

export default ListMenuItems;
