import GitHub from '../../assets/icon/ion_social-github.svg'
import Twitter from '../../assets/icon/ion_social-twitter.svg'
import LinkedIn from '../../assets/icon/ion_social-linkedin.svg'
import Facebook from '../../assets/icon/typcn_social-facebook.svg'

const Footer = () => {
    return(
        <footer className="bg-[#1b1b1b] text-white text-center h-fit flex flex-col gap-4 lg:flex-row justify-between items-center px-10 py-8 fixed w-full bottom-0">
            <div>
                <h1 className="text-3xl font-black">Guide Me</h1>
            </div>
            <div>
                <p>©Copyright 2023, All Rights Reserved by BKS</p>
            </div>
            <div className='flex gap-4'>
                <span className='bg-[#fff] rounded-full p-2'>
                    <img src={GitHub} alt="" />
                </span>
                <span className='bg-[#fff] rounded-full p-2'>
                    <img src={LinkedIn} alt="" />
                </span>
                <span className='bg-[#fff] rounded-full p-2'>
                    <img src={Twitter} alt="" />
                </span>
                <span className='bg-[#fff] rounded-full p-2'>
                    <img src={Facebook} alt="" />
                </span>
            </div>
        </footer>
    )
}

export default Footer