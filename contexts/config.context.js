import { createContext, useEffect, useState } from "react";
import { getMenus, getSettingsBlog } from "../lib/api";

const initialConfig = null;
const initialMenuItems = null;

const ConfigContext = createContext();

const ConfigContextProvider = ({ children }) => {
  const [config, setConfig] = useState(initialConfig);
  const [menuItems, setMenuItems] = useState(initialMenuItems);

  const getConfig = async () => {
    const res = await getSettingsBlog();
    const menuItems = await getMenus();
    setConfig(res);
    setMenuItems(menuItems);
  };

  useEffect(() => {
    getConfig();
  }, []);

  const data = { config, menuItems };

  return (
    <ConfigContext.Provider value={data}>{children}</ConfigContext.Provider>
  );
};

export default ConfigContextProvider;
export { ConfigContext };
