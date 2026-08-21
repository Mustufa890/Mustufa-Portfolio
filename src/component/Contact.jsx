"use client"
import { contactUser } from '@/Api/axios'
import React, { useState } from 'react'

const Contact = () => {
    const [form, setForm] = useState({
    name:'',
    email:'',
    message:''    
    })

    const handleSubmit = async (e)=>{
        e.preventDefault()
        try {
        const res = await contactUser(form)
        alert("Form Submit Successfull")    
        } catch (err) {
        console.log(err);
        alert("Error went Wrong ")    
        }
    }
  return (
  <>
   <section id='Contact' >
    <div className="justify-center" >
       <p className="text-center text-2xl font-bold text-blue-500" >Get in Touch</p>
    <h2 className="mt-2 text-6xl font-bold sm:text-5xl text-center" >Contact</h2>
    <br/>
    <p className="mx-auto max-w-2xl text-center text-sm leading-6 text-gray-600 sm:text-base sm:leading-7 md:text-lg">
  Have a project in mind or want to work together? Feel free to reach out. I’d love to hear from you.
</p>

    </div>
   <form
  onSubmit={handleSubmit}
  className="mx-auto w-full max-w-xl space-y-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-lg sm:p-8"
>
  <input
    type="text"
    name="name"
    placeholder="Enter your Name"
    onChange={(e) =>
      setForm({ ...form, name: e.target.value })
    }
    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 sm:text-base"
  />

  <input
    type="email"
    name="email"
    placeholder="Enter your Email"
    onChange={(e) =>
      setForm({ ...form, email: e.target.value })
    }
    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 sm:text-base"
  />

  <input
    type="text"
    name="message"
    placeholder="Enter your Message"
    onChange={(e) =>
      setForm({ ...form, message: e.target.value })
    }
    className="w-full rounded-xl border border-gray-300 px-4 py-8 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 sm:text-base"
  />

  <button
    type="submit"
    className="w-full rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700 active:scale-[0.98] sm:w-auto"
  >
    Send
  </button>
</form>
    </section>
  </> 
  )
}

export default Contact