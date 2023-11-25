"use client";
import Image from 'next/image';
import React from 'react'
import CustomButton from './CustomButton';

const About = () => {
    const handleScroll = () => {

    }
    return (  
      <section className="bg-black py-6 sm:py-12 min-h-screen flex items-center justify-cente">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center">
            {/* Left Column: Image */}
            {/*<div className="sm:w-1/3 m-2 sm:m-4">
              <Image
                src="/proff.png"
                alt="Person's Image"
                width={350}
                height={200}
                className="rounded-full object-cover shadow-md"
              />
            </div>*/}
  
            {/* Right Column: Name, Degree, and Description */}
            <div className="sm:w-2/3 m-2 sm:m-4">
              <h2 className="text-3xl font-bold text-primary-blue">Dr. Suriya Prakash</h2>
              <p className="text-xl text-violet-700 font-bold">Master of Surgery in Orthopaedics</p>
              <p className="text-white mt-4 font-bold about-paragraph">
                Dr. Suriya Prakash, a distinguished <span className="highlight">orthopedic surgeon,</span> is a master of surgery in orthopaedics with clinics in <span className="highlight">Batlagundu and Kallupatti.</span> With over two years of experience in the field, he has become a Senior Orthopaedic Consultant and recognized as one of the best Orthopedic Surgeons at Madurai Ortho. <span className="highlight">Dr. Suriya Prakash</span> also serves as a visiting consultant at renowned healthcare institutions like Batlagundu Government hospital, among others. Beyond his clinical practice, he is dedicated to spreading awareness and educating the public about various orthopedic conditions, <span className="highlight">particularly arthritis,</span> which affects millions of people worldwide. Dr. Suriya Prakash's commitment to patient care and public education has made a significant impact on improving the quality of life for his patients and raising awareness about orthopedic health.
              </p>
              <a href='#'>
              <CustomButton
              title="Talk with us"
              containerStyles="bg-primary-blue text-white rounded-full mt-10"
              handleClick={handleScroll}

            />
            </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;