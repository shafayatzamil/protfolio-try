"use clinet";

import React from "react";
import homeIcon from "../assets/icons8-home-48.png";
import aboutMeIcon from "../assets/icons8-person-48.png";
import projectIcon from "../assets/icons8-project-64.png";
import nightMoodICon from "../assets/icons8-night-mode-99.png";
import plusICon from "../assets/icons8-plus-64.png";
import Link from "next/link";
import Image from "next/image";
// import homeICon from "../assets/icons8-home-48.png";

const Navbar = () => {
  const navItems = [
    {
      route: "Home",
      pathname: "/",
      image: homeIcon,
    },
    {
      route: "About Me",
      pathname: "/aboutme",
      image: aboutMeIcon,
    },
    {
      route: "Projects",
      pathname: "/projects",
      image: projectIcon,
    },
  ];
  return (
    <div>
      {/* this navbar section for mobile */}
      <div className=" md:hidden lg:hidden border-2 border-gray-300  mt-2 mb-4 mx-1 p-3 rounded-xl  flex justify-between items-center ">
        <div className=" flex flex-row gap-4">
          {" "}
          {navItems.map((item) => (
            <Link key={item.route} href={item.pathname}>
              <div className="">
                <Image
                  src={item.image}
                  alt={item.route}
                  width={26}
                  height={26}
                />
              </div>
            </Link>
          ))}
        </div>

        {/* hire button  */}
        <div className="flex justify-center items-center gap-2">
          <div>
            <Image
              src={nightMoodICon}
              height={24}
              width={24}
              alt="nightmoodicons"
            />
          </div>{" "}
          <button className="font-bold flex items-center gap-1 text-sm text-white bg-black px-3 py-2 rounded-md">
            {" "}
            <div className="text-white">
              <Image src={plusICon} alt="plus icons" width={16} height={16} />
            </div>
            <h2> Hire me</h2>
          </button>
        </div>
      </div>

      {/* laptops and tablets */}
      <div className="hidden lg:block">this is laptop nav</div>
    </div>
  );
};

export default Navbar;
