import { VideoBanner } from "./components/home/VideoBanner";
import HeroSection from "./components/home/HeroSection";
import Introducing from "./components/home/Introducing";
import {MicroWork} from "./components/home/MicroWork";
import { SevenCard } from "./components/home/SevenCard";
// import { EverythingIn } from "./components/home/EverythingIn";
// import { EverythingIn2 } from "./components/home/EverythingIn2";
// import { Collaborative } from "./components/home/Collaborative";
import { CustomizedTowork } from "./components/home/CustomizedTowork";
import Marquee from "./components/home/Marquee";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <VideoBanner/>
      <HeroSection/>
      <Introducing/>
      <MicroWork/>
      <SevenCard/>
      <CustomizedTowork/>
      <Marquee/>
      {/* <EverythingIn/>
      <EverythingIn2/>
      <Collaborative/> */}
    </div>
  );
}
