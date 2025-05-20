import { VideoBanner } from "./components/home/VideoBanner";
import HeroSection from "./components/home/HeroSection";
import Introducing from "./components/home/Introducing";
import {MicroWork} from "./components/home/MicroWork";
import { EverythingIn } from "./components/home/EverythingIn";
import { EverythingIn2 } from "./components/home/EverythingIn2";
import { Collaborative } from "./components/home/Collaborative";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <VideoBanner/>
      <HeroSection/>
      <Introducing/>
      <MicroWork/>
      <EverythingIn/>
      <EverythingIn2/>
      <Collaborative/>
    </div>
  );
}
