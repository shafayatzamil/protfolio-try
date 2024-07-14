import React from "react";
import dotIcon from "../../assets/icons8-dot-48.png";
import dotIcon1 from "../../assets//icons8-circled-record-48.png";
import Image from "next/image";
import instagramIcon from "../../assets/socialicons/icons8-instagram-50.png";
import twitterIcon from "../../assets/socialicons/icons8-twitterx-50.png";
import fbIcon from "../../assets/socialicons/icons8-fb-50.png";
import linkedinIcon from "../../assets/socialicons/icons8-linkedin-50.png";
import whatsappIcon from "../../assets/socialicons/icons8-whatsapp-50.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-2 md:hidden lg:hidden">
      {/* this is footer section */}

      <div className="py-6 px-2 mt-2 mb-4 mx-2 rounded-lg border-2 bg-gray-50">
        <div className=" grid grid-cols-2 gap-2">
          <div className="flex justify-start items-center gap-1">
            {" "}
            <Image src={dotIcon1} alt="doticon" height={16} width={16} />
            <h2 className="text-md font-bold text-gray-500">Follow Me</h2>
          </div>
          <div className="grid grid-cols-4 ">
            <Link href="https://www.linkedin.com/in/shafayatzamil/">
              {" "}
              <Image src={linkedinIcon} alt="doticon" height={32} width={30} />
            </Link>
            <Link href="https://www.instagram.com/zshafayat/">
              <Image src={instagramIcon} alt="doticon" height={30} width={30} />
            </Link>
            <Link href="https://www.facebook.com/shafayat.zamil.9615/">
              <Image src={fbIcon} alt="doticon" height={30} width={30} />
            </Link>
            <Link href="https://wa.me/qr/DCB3LAYHGHNBP1">
              <Image src={whatsappIcon} alt="doticon" height={30} width={30} />
            </Link>
          </div>
        </div>
      </div>

      <div className=" py-10 px-2 mx-2 rounded-lg border-2 text-center text-gray-500 bg-gray-50 text-md">
        <h1>© 2024 Backend developer Template</h1>
        <h1> by shafayat zamil</h1>
      </div>
    </div>
  );
};

export default Footer;
