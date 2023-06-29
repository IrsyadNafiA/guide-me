import GitHub from "../../assets/icon/ion_social-github.svg";
import Twitter from "../../assets/icon/ion_social-twitter.svg";
import LinkedIn from "../../assets/icon/ion_social-linkedin.svg";
import Facebook from "../../assets/icon/typcn_social-facebook.svg";
import SocialIcon from "../Utilities/socialIcon";

const Footer = () => {
  return (
    <footer className="bg-[#1b1b1b] text-white text-center h-fit flex flex-col gap-4 lg:flex-row justify-between items-center px-10 py-8 relative w-full bottom-0 mt-10">
      <div>
        <h1 className="text-3xl font-black">Guide Me</h1>
      </div>
      <div>
        <p>©Copyright 2023, All Rights Reserved by BKS</p>
      </div>
      <div className="flex gap-4">
        <SocialIcon icon={GitHub} alt="GitHub" link="#" />
        <SocialIcon icon={LinkedIn} alt="LinkedIn" link="#" />
        <SocialIcon icon={Twitter} alt="Twitter" link="#" />
        <SocialIcon icon={Facebook} alt="Facebook" link="#" />
      </div>
    </footer>
  );
};

export default Footer;
