import { ReactNode } from "react";
import { GiWhaleTail } from "react-icons/gi";
import { LiaUmbrellaBeachSolid } from "react-icons/lia";
import { IoIosRestaurant } from "react-icons/io";
import { FaWifi } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const IconsClass = ({
  iconName,
  size,
}: {
  iconName: string | ReactNode;
  size?: number;
}) => {
  return (
    <>
      {iconName === "restaurant" ? <IoIosRestaurant size={size} /> : null}
      {iconName === "bahia" ? <GiWhaleTail size={size} /> : null}
      {iconName === "beach" ? <LiaUmbrellaBeachSolid size={size} />: null}
      {iconName === "wifi" ? <FaWifi size={size}/> : null}
      {iconName === "instagram" ? <FaInstagram size={size} /> : null}
    </>
  );
};

export default IconsClass;
