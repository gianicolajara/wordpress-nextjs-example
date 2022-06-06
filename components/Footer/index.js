import { useContext } from "react";
import { ConfigContext } from "../../contexts/config.context";
import Brand from "../Brand";
import ListMenuItems from "../ListMenuItems";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import Subtitle from "../Subtitle";
import P from "../P";

const social = [
  {
    id: 1,
    icon: <AiFillFacebook size={30} className="text-white" />,
  },
  {
    id: 2,
    icon: <AiFillTwitterCircle size={30} className="text-white" />,
  },
  {
    id: 3,
    icon: <AiFillInstagram size={30} className="text-white" />,
  },
];

const Footer = () => {
  const { config, menuItems } = useContext(ConfigContext);

  return (
    <footer className="bg-black p-5">
      <div className="flex w-full min-h-[300px] flex-col lg:flex-row">
        <div className="flex flex-1 justify-center items-center">
          {config && <Brand color="text-white" title={config.title} />}
        </div>
        <div className="flex flex-col gap-1 flex-1 justify-center items-center">
          {menuItems && (
            <ListMenuItems menuItems={menuItems} color="text-white" />
          )}
        </div>
        <div className="flex flex-col gap-1 flex-1 justify-center items-center">
          <Subtitle color="text-white">Visit Our Social Pages</Subtitle>
          <div className="flex gap-3">
            {social &&
              social.map((item) => (
                <a href="#" key={item.id}>
                  {item.icon}
                </a>
              ))}
          </div>
        </div>
      </div>
      <div className="w-full">
        <P color="text-white text-center">Created by Gianicola Jara</P>
      </div>
    </footer>
  );
};

export default Footer;
