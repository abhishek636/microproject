import { VideoBanner } from "./components/home/VideoBanner";
import HeroSection from "./components/home/HeroSection";
import Introducing from "./components/home/Introducing";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <VideoBanner/>
      <HeroSection/>
      <Introducing/>
    </div>
  );
}
