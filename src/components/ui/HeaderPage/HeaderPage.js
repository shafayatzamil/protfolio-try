import React from "react";
import Image from "next/image";
import blueIcon from "../../../assets/blueIcons.png";
import grayIcon from "../../../assets/grayIcon.png";
// import ownerImage from "../assets/owner.jpeg";
import ownerImage from "../../../assets/image (1).png";
import plusICon from "../../../assets/icons8-plus-64.png";
import copyICon from "../../../assets/icons8-copy-48.png";

const HeaderPage = () => {
  return (
    <div>
      {/* header section  */}
      <div className=" m-2  mt-6 border-2 rounded-lg p-2  ">
        {/* short heading */}
        <div className="flex justify-between items-center gap-1 mt-3">
          <div>
            <h4 className="text-gray-500 text-sm  font-bold flex items-center ">
              <span>
                <Image src={grayIcon} height={16} width={16} alt="grayicons" />
              </span>
              Back-end Developer
            </h4>
          </div>
          <div className="text-[#039754] bg-green-100 px-2 py-1 text-xs rounded-xl font-bold ">
            <h4 className=" flex items-center justify-between">
              <span>
                <Image src={blueIcon} height={12} width={12} alt="blueicons" />
              </span>
              AVAILABLE FOR WORK
            </h4>
          </div>
        </div>

        <div className=" grid grid-cols-5  gap-2 mt-8  ">
          {/* heading name */}
          <div className="p-2 col-span-3 ">
            <div>
              <h2 className="text-md font-bold text-gray-700 mb-3">
                I’m
                <span className="font-bold text-4xl text-gray-700">
                  Shafayat zamil
                </span>
              </h2>
              <p className=" text-sm text-gray-500   ">
                Back End Developer based in Node js.Currently
              </p>
              <span className=" text-sm text-gray-500  ">
                developing at express js.
              </span>
            </div>
            {/* hire button  */}
            <div className="my-4 ">
              <div className="flex justify-center items-center gap-2 text-xs">
                <button className="font-bold grid grid-cols-5 items-center text-white bg-black px-3 py-2 rounded-md">
                  {" "}
                  <div className="text-white col-span-1">
                    <Image
                      src={plusICon}
                      alt="plus icons"
                      width={20}
                      // height={16}
                    />
                  </div>
                  <p className="col-span-4"> Hire me</p>
                </button>

                <button className="font-bold grid grid-cols-5 items-center border-2 border-gray-300  px-3 py-2 rounded-lg">
                  {" "}
                  <div className="text-white col-span-1">
                    <Image
                      src={copyICon}
                      alt="plus icons"
                      width={20}
                      // height={16}
                    />
                  </div>
                  <p className="col-span-4 text-xs"> Copy Email</p>
                </button>
              </div>
            </div>
          </div>

          {/* image section */}
          <div className=" col-span-2 my-auto">
            {/* <Image
              src={ownerImage}
              height={96}
              width={96}
              className="rounded-3xl"
              alt="owner"
            /> */}
            <div className="">
              <Image
                alt="ownerimage"
                className="rounded-full w-48"
                src={ownerImage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderPage;
