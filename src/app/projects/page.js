import Image from "next/image";
import React from "react";

import grayIcon from "../../assets/grayIcon.png";

const page = () => {
  return (
    <div className="m-2 rounded-md py-5 px-3 bg-white  ">
      <div>
        {/* <h2>This is about page</h2> */}
        <h4 className="text-gray-500 text-lg   font-bold flex items-center ">
          <span>
            <Image src={grayIcon} height={16} width={16} alt="grayicons" />
          </span>
          Projects
        </h4>
      </div>

      <div>
        <h2 className="text-4xl mt-4 mb-2 text-gray-700 font-bold ">
          My Works
        </h2>
        <p className="text-gray-600 text-md mb-4">
          Discover my portfolio, where purposeful interfaces meet captivating
          backend. My work strives to enhance experiences and inspire.
        </p>
      </div>
    </div>
  );
};

export default page;
