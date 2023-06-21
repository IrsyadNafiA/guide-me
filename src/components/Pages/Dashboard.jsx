// import React from 'react'
import Background from '../../assets/background.png'
import Maps from '../../assets/maps.png'
import { HiArrowSmRight } from "react-icons/hi";

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <img src={Background} className='w-full h-screen object-cover object-left scale-x-[-1] opacity-30' alt="" />
        <div className='h-screen absolute w-full top-0 left-0 z-50'>
            <div className='flex flex-row h-full w-full items-center justify-center gap-5'>
                <div className='hero-text'>
                    <h1 className='text-[60px]'>WELCOME</h1>
                    <h1 className='text-[60px] font-black'>EXPLORER</h1>
                    <p className='text-2xl'>Let's visit the destination at Batam Island</p>
                    <a href="/home" className='flex items-center justify-center outline bg-black text-white font-semibold text-lg rounded-lg mt-4 w-[145px] h-[53px] hover:bg-white hover:text-black hover:outline-2'>Let's Go <HiArrowSmRight className='' size={30} /></a>
                </div>
                <div className='hero-img'>
                    <img src={Maps} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard