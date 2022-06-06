import { IoMdPerson } from "react-icons/io";
import { MdOutlineSell } from "react-icons/md";
import { FaStoreAlt } from "react-icons/fa";
const Numbers = () => {
  return (
    <section>
      <div className="w-full h-min-[300px] h-full p-10 bg-black flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-20">
        <div className="text-center flex flex-col gap-2 items-center">
          <IoMdPerson size={45} className="text-white" />
          <p className="text-4xl text-white font-bold">25</p>
          <h2 className="text-2xl text-white font-bold">Clients</h2>
        </div>
        <div className="text-center flex flex-col gap-2 items-center">
          <MdOutlineSell size={45} className="text-white" />
          <p className="text-4xl text-white font-bold">1500</p>
          <h2 className="text-2xl text-white font-bold">Sells</h2>
        </div>
        <div className="text-center flex flex-col gap-2 items-center">
          <FaStoreAlt size={45} className="text-white" />
          <p className="text-4xl text-white font-bold">4</p>
          <h2 className="text-2xl text-white font-bold">Countries</h2>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
