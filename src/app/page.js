import Image from "next/image";
import blueIcon from "../assets/blueIcons.png";
import grayIcon from "../assets/grayIcon.png";
// import ownerImage from "../assets/owner.jpeg";
import ownerImage from "../assets/image (1).png";
import plusICon from "../assets/icons8-plus-64.png";
import copyICon from "../assets/icons8-copy-48.png";
import HireButton from "@/components/ui/HireButton/HireButton";
import HeaderPage from "@/components/ui/HeaderPage/HeaderPage";
import WorkTogether from "@/components/shared/WorkTogether";
import SkillPage from "@/components/ui/SkillPage/SkillPage";

const HomePage = () => {
  return (
    <div>
      <HeaderPage />
      <SkillPage />
      <WorkTogether />
    </div>
  );
};

export default HomePage;
