'use client';
import { Tabs } from "../ui/Tabs";

export default function Introducing() {
  const tabs = [
    {
      title: "Home",
      value: "Home",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white">
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Messages",
      value: "Messages",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white">
          <DummyContent />
        </div>
      ),
    },
    {
      title: "CRM",
      value: "CRM",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white">
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Projects",
      value: "Projects",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white">
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Micro AI",
      value: "Micro AI",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white">
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-white text-center text-4xl md:text-6xl font-bold mb-4">Introducing Micro</h1>
        <h3 className="text-white/80 text-center text-xl md:text-2xl max-w-2xl mx-auto mb-16">
          The all-in-one tool that organizes itself
        </h3>
        
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full">
          <Tabs 
            tabs={tabs}
            containerClassName="mb-5 justify-center bg-white/40 w-fit mx-auto px-4 py-1.5 rounded-full"
            contentClassName="mt-5" 
          />
        </div>
      </div>
    </section>
  );
}

const DummyContent = () => {
  return (
    <img
      src="/images/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[90%] md:h-[90%] absolute -bottom-10 inset-x-0 mt-10 rounded-xl mx-auto "
    />
  );
};