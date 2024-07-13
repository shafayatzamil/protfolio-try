import React from "react";
import grayIcon from "../../../assets/grayIcon.png";
import Image from "next/image";
import viewallIcon from "../../../assets/icons8-right-arrow-24.png";
import projectLogo from "../../../assets/image (1).png";
import arrowIcon from "../../../assets/icons8-arrow-24 (1).png";

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
              <Image src={viewallIcon} weight={8} alt="arrowicon" />
            </span>
          </h4>
        </div>
      </div>
      {/* project */}
      <div className="border-2 rounded-lg my-2">
        {/* this is project */}
        <div className="flex justify-around items-center py-2 ">
          <div>
            <Image
              src={projectLogo}
              weight={56}
              height={56}
              alt="projecticon"
            ></Image>
          </div>
          <div className=" text-gray-500 -ml-4">
            <h2 className="text-lg font-bold">Marba labs</h2>
            <h2 className="text-sm font-semibold">visual designing,branding</h2>
          </div>
          <div className="border-2 rounded-full">
            <Image src={arrowIcon} alt="project arrow"></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pRojectPage;
