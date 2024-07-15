import Image from "next/image";
import blueIcon from "../assets/blueIcons.png";
import grayIcon from "../assets/grayIcon.png";
// import ownerImage from "../assets/owner.jpeg";
import ownerImage from "../assets/image (1).png";
import plusICon from "../assets/icons8-plus-64.png";
import copyICon from "../assets/icons8-copy-48.png";
import HireButton from "@/components/ui/HireButton/HireButton";
import HeaderPage from "@/components/ui/HeaderPage/HeaderPage";

import SkillPage from "@/components/ui/SkillPage/SkillPage";
import ProjectPage from "@/components/ui/projectPage/ProjectPage";

const HomePage = () => {
  return (
    <div>
      <HeaderPage />
      <SkillPage />
      <ProjectPage />
    </div>
  );
};

export default HomePage;
