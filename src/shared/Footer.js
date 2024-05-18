import React from "react";
import dotIcon from "../assets/icons8-dot-48.png";
import dotIcon1 from "../assets//icons8-circled-record-48.png";
import Image from "next/image";
import instagramIcon from "../assets/socialicons/icons8-instagram-50.png";
import twitterIcon from "../assets/socialicons/icons8-twitterx-50.png";
import fbIcon from "../assets/socialicons/icons8-fb-50.png";
import linkedinIcon from "../assets/socialicons/icons8-linkedin-50.png";

const Footer = () => {
  return (
    <div className="py-2">
      {/* this is footer section */}

      <div className="py-6 px-2 my-6 mx-2 rounded-lg border-2 bg-gray-50">
        <div className=" grid grid-cols-2 gap-2">
          <div className="flex justify-start items-center gap-1">
            {" "}
            <Image src={dotIcon1} alt="doticon" height={16} width={16} />
            <h2 className="text-lg font-bold text-gray-500">Follow Me</h2>
          </div>
          <div className="grid grid-cols-4 ">
            <Image src={linkedinIcon} alt="doticon" height={32} width={30} />
            <Image src={instagramIcon} alt="doticon" height={30} width={30} />
            <Image src={fbIcon} alt="doticon" height={30} width={30} />
            <Image src={twitterIcon} alt="doticon" height={30} width={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
