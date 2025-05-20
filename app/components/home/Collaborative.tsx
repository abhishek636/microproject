import Image from "next/image";

export function Collaborative() {
  return (
    <div className="md:py-16 py-8">
        <div className="max-w-[1180px] mx-auto">
            <h1 className=" font-500 mx-auto text-white leading-none pt-5 z-50">Collaborative by default</h1>
            <p className="max-w-[450px] text-white text-sm pt-1">Create custom apps, objects, properties and more to power any kind of experience you can imagine or use Micro AI to generate it from your description.</p>
        </div>
      
        <div className="grid place-items-center pt-10">
            <Image
                src='/images/Person.webp'
                alt=""
                width={400}
                height={400}
            />
            
        </div>
    </div>
  );
}
 