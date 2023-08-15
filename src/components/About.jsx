import React from 'react'
import aboutImage from '../assets/pharmasict-serving-customer-drug-store 1.png'
const About = () => {
  return (
    <div className='flex flex-col md:flex-row mt-12 md:mt-40 h-[450px] justify-center bg-slate-100 gap-6'>

        <img src ={aboutImage} className='hidden md:block md:mx-10 lg:mx-20' alt="" />
        <div className=' flex flex-col justify-center items-center md:items-start gap-4 w-[80%] m-auto md:m-0 lg:max-w-[50%] p-4  '>
            <h1 className='text-xl lg:text-4xl font-bold text-[#0E2368]'>About Us</h1>
            <p className='lg:w-[60%] text-sm lg:text-xl font-light text-center md:text-left'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
        <button className='bg-[#E23744] text-white rounded-full p-2 px-4 text-xs lg:text-xl'>Read More</button>
        </div>


    </div>
  )
}

export default About