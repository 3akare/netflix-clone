import React from "react";
interface NavBarItemProp {
  label: string;
}

const NavBarItem: React.FunctionComponent<NavBarItemProp> = ({ label }) => {
  return (
    <div className="text-white cursor-pointer hover:text-gray-300 transition text-base">
      {label}
    </div>
  );
};

export default NavBarItem;
