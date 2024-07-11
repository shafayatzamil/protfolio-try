import React from "react";
import grayIcon from "../../../assets/grayIcon.png";
import Image from "next/image";
import nodejsIcon from "../../../assets/skillicons/icons8-nodejs-48.png";
import expressICon from "../../../assets/skillicons/icons8-express-js-48.png";
import typeScriptIcon from "../../../assets/skillicons/icons8-typescript-50.png";

import mySqlIcon from "../../../assets/skillicons/icons8-mysql-48.png";
import mongodbIcon from "../../../assets/skillicons/icons8-mongodb-48.png";
import githubIcon from "../../../assets/skillicons/icons8-github-50.png";
import firebaseIcon from "../../../assets/skillicons/icons8-firebase-48.png";
import postmanIcon from "../../../assets/skillicons/icons8-postman-api-64.png";
// import nodejsICon3 from "../../../assets/skillicons/icons8-mongodb-48.png";
// import nodejsICon3 from "../../../assets/skillicons/icons8-mongodb-48.png";
const SkillPage = () => {
  return (
    <div className=" m-2 bg-[#e6e6e6] border-2 rounded-lg p-2  ">
      {/* mini heading section */}
      <div className="flex items-center">
        <h4 className="text-gray-500 text-sm  font-bold flex items-center ">
          <span>
            <Image src={grayIcon} height={16} width={16} alt="grayicons" />
          </span>
          Skill or technology
        </h4>
      </div>
      {/* all technology */}
      <div className="grid grid-cols-4 gap-1 justify-items-center ">
        {/* <div>This is all skill logo</div> */}
        <div className="border-4  border-red-300 p-2">
          <Image src={nodejsIcon} alt="nodejsIcon"></Image>
        </div>
        <div className="border-4  border-red-300 p-2">
          <Image src={expressICon} alt="expressICon"></Image>
        </div>
        <div className="border-4   border-red-300 p-2">
          <Image src={typeScriptIcon} alt="typeScriptIcon" />
        </div>
        <div className="border-4   border-red-300 p-2">
          <Image src={mySqlIcon} alt="mySqlIcon" />
        </div>
        <div className="border-4   border-red-300 p-2">
          <Image src={mongodbIcon} alt="mongodbIcon"></Image>
        </div>
        <div className="border-4   border-red-300 p-2">
          <Image src={githubIcon} alt="githubIcon"></Image>
        </div>
        <div className="border-4   border-red-300 p-2">
          <Image src={firebaseIcon} alt="firebaseIcon"></Image>
        </div>
        <div className="border-4   border-red-300 p-2">
          <Image src={postmanIcon} alt="postmanIcon"></Image>
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
