import Image from "next/image";

export function EverythingIn() {
  return (
    <div>
        <div className="max-w-[1180px] mx-auto">
            <h1 className=" font-500 mx-auto text-white leading-none pt-5 z-50">Everything in one place</h1>
            <p className="max-w-[450px] text-white text-sm pt-1">Fully-featured email client, CRM, task manager and more integrated with Gmail, Calendar, Linkedin, WhatsApp and other tools. Plus the ability to create pipeline trackers, project management tools and more on top of this data.</p>
        </div>
      
        <div className="grid grid-cols-6 gap-4 px-2 pt-10">
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
 