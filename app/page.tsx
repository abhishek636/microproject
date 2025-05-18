import HerSection from "./components/home/HerSection";
import FloatingOrb from './components/ui/FloatingOrb';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <FloatingOrb baseSize={0.13} speed={1} />
      <FloatingOrb baseSize={0.08} speed={1.2} />
      <FloatingOrb baseSize={0.12} speed={0.5} />
      <FloatingOrb baseSize={0.13} speed={0.8} />
      <FloatingOrb baseSize={0.08} speed={1.2} />
      <FloatingOrb baseSize={0.12} speed={1} />
      <HerSection/>
    </div>
  );
}
