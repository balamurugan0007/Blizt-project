import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import {BiLogoLinkedin,BiLogoBehance,BiLogoGithub,BiLogoYoutube} from 'react-icons/bi'

const Footer = () => {
  return (
    <div className=' '>
         
<footer className="relative bg-blueGray-200 pt-8 pb-6 bg-slate-100" id='Contact'>
    <h2 className='text-xl lg:text-2xl font-lora font-bold text-purple-700 text-center lg:mb-5 mt-5 lg:mt-1'>Contact Details</h2>
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap text-left lg:text-left">
      <div className="w-full lg:w-6/12 px-4">
        <h4 className="text-3xl font-bold text-blueGray-700 font-inter mt-5 lg:mt-0 ">Let's keep in touch!</h4>
        <h5 className="text-lg  mb-2 text-blueGray-600 font-poppins lg:mt-0 mt-4">
         Contact links
        </h5>
        <div className="mt-6 lg:mb-0 mb-6">
           <div className='icons mt-5 justify-center '>
                     <div className='flex'>
                         <div className='w-10 h-10  object-contain border-2 border-slate-500 rounded-full p-2 hover:bg-blue-700 hover:border-0 ml-3'>
                            <a href='https://www.linkedin.com/in/bala-murugan-20794b252/' >
                                <BiLogoLinkedin className='text-slate-800 w-full h-full'/>
                            </a>
                         </div>

                         <div className='w-10 h-10  object-contain border-2 border-slate-500 rounded-full p-2 hover:bg-sky-700 hover:border-0 ml-3'>
                            <a href='https://www.behance.net/murugank4' >
                                <BiLogoBehance className='text-slate-800 w-full h-full'/>
                            </a>
                         </div>

                         <div className='w-10 h-10  object-contain border-2 border-slate-500 rounded-full p-2 hover:bg-purple-600 hover:border-0 ml-3'>
                            <a href='https://github.com/balamurugan0007' >
                                <BiLogoGithub className='text-slate-800 w-full h-full'/>
                            </a>
                         </div>

                         <div className='w-10 h-10  object-contain border-2 border-slate-500 rounded-full p-2 hover:bg-red-800 hover:border-0 ml-3'>
                            <a href='https://www.youtube.com/@CodemaxTamil/featured' >
                                <BiLogoYoutube className='text-slate-800 w-full h-full'/>
                            </a>
                         </div>
                     </div>

                </div>
         </div>
       
      </div>
      <div className="w-full lg:w-6/12 px-4">
        <div className="flex flex-wrap items-top mb-6">
          <div className="w-full lg:w-4/12 px-4 ml-auto">
            <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2 mt-5 lg:mt-0">Devloper Contact</span>
            <ul className="list-unstyled">
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-inter font-semibold block pb-2 text-sm" href="https://balamurugan-portfolio-delta.vercel.app/">Portfolio</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-inter font-semibold block pb-2 text-sm" href="https://medium.com/@balamurugan.k.02437">Blog</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-inter font-semibold block pb-2 text-sm" href="https://github.com/balamurugan0007">Github</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold font-inter block pb-2 text-sm" href="https://www.linkedin.com/in/bala-murugan-20794b252/">Linkedin</a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2 lg:mt-0 mt-5">Other Resources</span>
            <ul className="list-unstyled">
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">License</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Terms &amp; Conditions</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Privacy Policy</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr className="my-6 border-blueGray-500"/>
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm text-blueGray-500 font-semibold py-1">
          Copyright © <span id="get-current-year">2023</span><a href="https://balamurugan-portfolio-delta.vercel.app/" className="text-blueGray-500 hover:text-gray-800" target="_blank">by </a>
          <a href="https://balamurugan-portfolio-delta.vercel.app/" className="text-blueGray-500 hover:text-blueGray-800"> Balamurugan</a>.
        </div>
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer