'use client';
import { useState } from 'react';
import Link from 'next/link';
import React from 'react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [dropdownOpen, setDropdownOpen] = React.useState(false);
  return (
  <>
   <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
                    *{
                        font-family: "Geist", sans-serif;
                    }
                `}
            </style>
            <nav className="fixed top-0 left-0 w-full z-50  px-6 md:px-16 lg:px-24 xl:px-32 py-4 flex items-center justify-between  ">
                <div className="flex items-center gap-10 bg-gray-100 shadow-md  rounded-4xl p-2.5 ">
                    <Link className='text-3xl font-bold' href="/" ><span className='text-blue-500' >Mus</span>tufa<span className='text-blue-800' >.</span></Link>
                    <div className="hidden md:flex items-center gap-8">
                    <Link className= '' href="/" >Home</Link>    
                    <Link className='' href="#About" >About</Link>    
                    <Link className='' href="#Skills" >Skills</Link>
                    <Link className='' href="#Certifates" >Certifates</Link>
                    <Link className='' href="#Project" >Project</Link>
                    </div>
                </div>

                <Link href='#Contact' className="hidden md:flex items-center gap-5 text-white  bg-blue-600 text-sm font-bold  h-12  pl-5  px-8 rounded-2xl  pr-2.5 py-2 cursor-pointer border-0">
                Contact
                </Link>

                <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-0 p-1">
                    <span className={`block w-6 h-0.5 bg-zinc-800 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-zinc-800 transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-zinc-800 transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>

                {menuOpen && (
                    <div className="absolute top-full left-0 w-full bg-gray-100 rounded-4xl shadow-2xl border-t border-zinc-200 flex flex-col p-5 gap-5 md:hidden z-50">
                      
                        
                        <Link className= '' href="/" >Home</Link>    
                    <Link className='' href="#About" >About</Link>    
                    <Link className='' href="#Skills" >Skills</Link>
                    <Link className='' href="#Certifates" >Certifates</Link>
                    <Link className='bg-blue-600 p-2.5 w-20 rounded-3xl text-white font-bold' href="#Contact" >Contact</Link>
                     
                    </div>
                )}
            </nav>
  </>  
  )
}

export default Navbar