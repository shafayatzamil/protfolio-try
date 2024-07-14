"use client";
import React, { useState } from "react";
import Image from "next/image";
import plusICon from "../../../assets/icons8-plus-64.png";
import copyICon from "../../../assets/icons8-copy-48.png";
import { CopyToClipboard } from "react-copy-to-clipboard";

const HireButton = () => {
  return (
    <div>
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
  );
};

export default HireButton;
