"use client"
// contactme.tsx
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import Link from 'next/link';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Props = {}

function Contactme({}: Props){
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>();
  
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    if (typeof window !== 'undefined') {
      window.location.href = `mailto:rakeshrvr1998@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    }
  }

  return (
    <div className='flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center h-screen'>
      <div className='flex flex-col space-y-10'>
        <div className='space-y-10'>
          <div className='flex flex-col items-center space-x-5 justify-center'>
            <p className='text-4xl font-bold mb-8 text-gray-600'>Make an Appointment</p>
            <p className='text-2xl font-bold'>7639614004</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            
            <p className='text-2xl font-bold'>drsuryaortho@gmail.com</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4 w-fit mx-auto'>
          <div className='flex space-x-6'>
            <input {...register('name')} placeholder='Name' className="contactInput"  style={{ backgroundColor: 'gray', color: 'black' }} type='text' />
            <input {...register('email')} placeholder='Email' className="contactInput" style={{ backgroundColor: 'gray', color: 'black' }} type='text' />
          </div>
          <input {...register('subject')} placeholder='Subject' className="contactInput" style={{ backgroundColor: 'gray', color: 'black' }} type='text' />
          <textarea {...register('message')} placeholder='Message' className="contactInput" style={{ backgroundColor: 'gray', color: 'black' }} />
          <button type='submit' className='bg-blue-700 py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contactme