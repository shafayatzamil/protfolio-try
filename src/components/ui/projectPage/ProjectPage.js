import React from "react";
import grayIcon from "../../../assets/grayIcon.png";
import Image from "next/image";
import arowIcon from "../../../assets/icons8-right-arrow-24.png";

const pRojectPage = () => {
  return (
    <div className=" m-2  mt-2 border-2 rounded-lg p-2  ">
      {/* project heading */}
      <div className="flex justify-between items-center gap-1 ">
        <div>
          <h4 className="text-gray-500 text-sm  font-bold flex items-center ">
            <span>
              <Image src={grayIcon} height={16} width={16} alt="grayicons" />
            </span>
            Projects
          </h4>
        </div>
        <div className="px-2 py-1 text-xs text-gray-700  rounded-md border-2 font-bold ">
          <h4 className=" flex items-center justify-between ">
            View All
            <span className="ms-1">
              <Image src={arowIcon} weight={8} alt="arrowicon" />
            </span>
          </h4>
        </div>
      </div>
      {/* project */}
      <div className="bg-red-500">this is project</div>
    </div>
  );
};

export default pRojectPage;
