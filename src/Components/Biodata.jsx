import React from 'react'
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import AEC from './AEC';
import { FaInstagramSquare } from "react-icons/fa";

function Biodata() {
  return (
    <>  <h1 className='text-4xl  px-3 font-bold text-white'>Manish Sonwani</h1>
    <h3 className='text-xl   px-3 font-semibold text-white capitalize'>frontened developer </h3>
    <p className='mt-5 text-zinc-200 px-3 font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <AEC />
    <div className='text-zinc-400 icons px-3 mt-6 flex gap-3'>

   
    <AiFillGithub  size='25'  />
    <FaLinkedin   size='25' />
    <FaWhatsapp   size='25' />
    <BiLogoGmail   size='25'/>
    <FaInstagramSquare size='25' / >

    </div>
    </>
    
  )
}

export default Biodata