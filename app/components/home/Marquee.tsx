// components/SvgMarquee.js
'use client';
import React from 'react';
import Image from 'next/image'
const Marquee = () => {
   return (
    <div className='hcocbkg md:py-16 py-8 md:px-32'>
    
    <section className='flex   '>
      <div className='w-1/6'>

      </div>
     <div className='w-2/6 border-l border-r border-[bg-gray-100]  h-100vh'>
     <div>
        <div className='bg-black p-4 rounded-2xl h-[400px] grid place-items-center'>
        <Image src='/images/svg1.svg' alt='' width={382} height={382} />

        </div>
        <div className='mt-3 px-2'>
          <div className='flex justify-between items-center text-black'>
            <h3 className='text-2xl'>Build For Speed</h3>
            <span> [ 01 ]</span>
          </div>
          <p>Lightning-Fast Performance For Every Task</p>
        </div>
        </div>
        <div>
        <div className='bg-black p-4 rounded-2xl h-[400px] mt-[1000px] grid place-items-center'>
        <Image src='/images/svg1.svg' alt='' width={382} height={382} />

        </div>
        <div className='mt-3 px-2'>
          <div className='flex justify-between items-center text-black'>
            <h3 className='text-2xl'>Build For Speed</h3>
            <span> [ 01 ]</span>
          </div>
          <p>Lightning-Fast Performance For Every Task</p>
        </div>
       </div>
      </div>
      <div className='w-2/6  pt-[800px] border-r  border-[bg-gray-100] h-100vh '>
        <div className='bg-black p-4 rounded-2xl h-[400px] grid place-items-center'>
        <Image src='/images/svg1.svg' alt='' width={382} height={382} />

        </div>
        <div className='mt-3 px-2'>
          <div className='flex justify-between items-center text-black'>
            <h3 className='text-2xl'>Build For Speed</h3>
            <span> [ 01 ]</span>
          </div>
          <p>Lightning-Fast Performance For Every Task</p>
        </div>

      </div>


    </section>

    </div>
  );
};

export default Marquee;
