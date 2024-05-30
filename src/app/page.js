import Image from "next/image";
import blueIcon from "../assets/blueIcons.png";
import grayIcon from "../assets/grayIcon.png";
// import ownerImage from "../assets/owner.jpeg";
import ownerImage from "../assets/image (1).png";

const HomePage = () => {
  return (
    <div>
      {/* header section  */}
      <div className=" m-2  mt-6 border-2 rounded-lg p-2 h-96 ">
        {/* short heading */}
        <div className="flex justify-between items-center gap-1 mt-3">
          <div>
            <h4 className="text-gray-400 text-sm  font-bold flex items-center ">
              <span>
                <Image src={grayIcon} height={16} width={16} alt="grayicons" />
              </span>
              Back-end Developer
            </h4>
          </div>
          <div className="text-[#039754] bg-green-200 px-2 py-1 text-xs rounded-xl font-bold ">
            <h4 className=" flex items-center justify-between">
              <span>
                <Image src={blueIcon} height={12} width={12} alt="blueicons" />
              </span>
              AVAILABLE FOR WORK
            </h4>
          </div>
        </div>

        <div className="flex justify-between items-center gap-2 mt-8 ">
          <div>
            <h2 className="font-bold text-3xl text-gray-600 my-4 ">
              I’m Shafayat zamil
            </h2>
            <p className=" text-sm text-gray-500  ">
              Back End Developer based in Node js.Currently
            </p>
            <span className=" text-sm text-gray-500  ">
              developing at express js.
            </span>
          </div>
          <div>
            {/* <Image
              src={ownerImage}
              height={96}
              width={96}
              className="rounded-3xl"
              alt="owner"
            /> */}
            <div className="avatar online">
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
    </div>
  );
};

export default HomePage;
