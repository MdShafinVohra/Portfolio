import { PiLinkedinLogoThin, PiGithubLogoLight, PiAt } from "react-icons/pi";

export default function Social() {
  return (
    <div className="flex w-32 justify-between pb-9">
      <PiLinkedinLogoThin size={25} color="white" />
      <PiGithubLogoLight size={25} color="white" />
      <PiAt size={25} color="white" />
    </div>
  );
}
