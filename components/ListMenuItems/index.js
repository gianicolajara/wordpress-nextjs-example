import PropTypes from "prop-types";
import { setUrl } from "../../lib/menu.utils";
import MenuItem from "../MenuItem";

const ListMenuItems = ({ menuItems = [], color = "" }) => {
  return menuItems.map((item) => (
    <MenuItem key={item.node.id} color={color} url={setUrl(item.node.label)}>
      {item.node.label}
    </MenuItem>
  ));
};

ListMenuItems.propTypes = {
  menuItems: PropTypes.array.isRequired,
  color: PropTypes.string,
};

export default ListMenuItems;
