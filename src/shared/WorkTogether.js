import Image from "next/image";
import React from "react";
import plusICon from "../assets/icons8-plus-64.png";
import copyICon from "../assets/icons8-copy-48.png";

const WorkTogether = () => {
  return (
    <div>
      <div className=" p-4 mt-6 text-center bg-white">
        <h2 className="text-3xl font-bold mt-8 mb-4 ">Let’s work together.</h2>
        <p className=" text-gray-500">
          Creating user experience and visual appealing design
        </p>

        {/* hiring button and copy email button */}
        <div className="flex justify-center items-center gap-4 text-sm p-6 ">
          <button className="font-bold flex items-center gap-1  text-white bg-black px-3 py-2 rounded-md">
            {" "}
            <div className="text-white">
              <Image src={plusICon} alt="plus icons" width={16} height={16} />
            </div>
            <h2> Hire me</h2>
          </button>

          <button className="font-bold flex items-center gap-1  border-2 border-gray-300  px-3 py-2 rounded-lg">
            {" "}
            <div className="text-white">
              <Image src={copyICon} alt="plus icons" width={16} height={16} />
            </div>
            <h2> Copy Email</h2>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkTogether;
