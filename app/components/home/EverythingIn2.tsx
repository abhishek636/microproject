import Image from "next/image";

export function EverythingIn2() {
  return (
    <div className="md:py-16 py-8">
        <div className="max-w-[1180px] mx-auto">
            <h1 className=" font-500 mx-auto text-white leading-none pt-5 z-50">Automatically Updated</h1>
            <p className="max-w-[450px] text-white text-sm pt-1">Everything - companies, people, and more - is enriched with hundreds of datapoints from a rich global and personal knowledge graph. Plus any property can be updated automatically when there&#39;s new email or meeting activity.</p>
        </div>
      
        <div className="grid grid-cols-3 place-items-center gap-4 px-2 pt-10 text-center">
            <Image
                src='/images/Person.webp'
                alt=""
                width={400}
                height={400}
            />
            <Image
                src='/images/Person.webp'
                alt=""
                width={400}
                height={400}
            />
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
 