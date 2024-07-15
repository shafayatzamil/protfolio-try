import Image from "next/image";
import React from "react";
import grayIcon from "../../assets/grayIcon.png";
import ownerImage from "../../assets/image (1).png";

const page = () => {
  return (
    <div className=" m-2 rounded-md py-5 px-3 bg-white  ">
      {/* short heading section */}
      <div>
        {/* <h2>This is about page</h2> */}
        <h4 className="text-gray-500 text-lg   font-bold flex items-center ">
          <span>
            <Image src={grayIcon} height={16} width={16} alt="grayicons" />
          </span>
          Abouts
        </h4>
      </div>

      <div>
        <h2 className="text-4xl mt-4 mb-2 text-gray-700 font-bold ">
          It's shafayat zamil
        </h2>
        <p className="text-gray-600 text-md mb-4">
          I'm shafayat zamil, a backend developer with over 2 years of
          experience, currently residing in Jakarta, Indonesia. I have a deep
          passion for crafting purposeful interfaces and products. My main goal
          is to bridge the divide between people and technology, transforming
          intricate challenges into meaningful and seamless experiences.
        </p>

        <div className="border-2 rounded-lg flex justify-center p-2 bg-gray-50">
          <Image src={ownerImage} alt="ownerimage" />
        </div>

        <div>
          <h2 className="text-3xl  mt-4 mb-2 text-gray-700 font-bold">
            More About Me
          </h2>

          <p className="text-gray-600 text-md mb-4">
            {" "}
            zamil Do holds a bachelor's degree in computer science from a port
            city international university in the Bangladesh and has a relentless
            drive for staying up-to-date with the latest technologies and design
            trends. Actively involved in the design community, Zamil regularly
            participates in diverse design conferences and meetups.
          </p>
          <p className="text-gray-600 text-md mb-4">
            When he's not immersed in backend work, he finds solace in playing
            the guitar and exploring new coffee shops in his local area. Brian
            firmly believes in maintaining a healthy work-life balance, making
            sure to take breaks and reenergize his creativity. In his spare
            time, he also volunteers at a local animal shelter on weekends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
