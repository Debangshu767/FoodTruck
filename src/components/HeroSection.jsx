import React from 'react';
import icon from '../assets/icon.png';
import curve from '../assets/Vector 1.svg';
import heroimg from '../assets/Group 289.png';

const HeroSection = () => {
  return (
    <div className='md:ml-12 flex-col-reverse md:flex-row  min-h-screen'>
      <div>
        <img src={heroimg} className='absolute top-0 right-0 w-full md:h-[95%] md:w-auto md:object-contain -z-20 ' alt="" />
        <img src={curve} className='md:absolute top-0 right-0 w-full md:w-auto md:h-screen -z-10' alt="" />
        <div className='flex flex-row-reverse md:flex-row justify-between items-center'>
          <img src={icon} className='hidden md:block h-[83px] w-[107px] m-2' alt="" />
          <button className=' text-sm md:text-md absolute top-0 right-0 border-2 border-white text-white p-2 m-4 rounded-full'>Get in Touch</button>
        </div>
      </div>

      <div className='mt-12 flex flex-col gap-2 justify-center w-[80%] m-auto relative  md:w-[40%] md:m-0 md:mt-20'>
        <h1 className='text-5xl text-center md:text-left md:text-8xl font-bold text-[#0E2368]'>
          Discover the <span style={{ color: '#E23744' }}>Best</span> Food and Drinks
        </h1>

        <p className='text-center md:text-left mt-4 md:text-2xl font-thin md:mt-4 '>Naturally made Healthcare Products for the better care & support of your body.</p>

        <button className='md:text-2xl bg-[#E23744] rounded-full p-4  m-auto md:m-0 mt-6 md:mt-6 md:max-w-[40%] max-w-[50%] font-normal px-6 text-white'>Explore Now!</button>
      </div>
    </div>
  );
}

export default HeroSection;
