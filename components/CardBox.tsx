// components/BoxCard.tsx
import React from 'react';

const BoxCard = () => {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5">
      {/* Card 1 */}
      <div className="w-full lg:max-w-full lg:flex">
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: "url('/kneee.png')" }} title="knee">
        </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
                Dr.Suriya's Ortho
              
            </p>
            <div className="text-gray-900 font-bold text-xl mb-2">Knee Surgery</div>
            <p className="text-gray-700 text-base">At Dr.Suriya ortho, our expert orthopedic surgeons specialize in advanced knee surgery 
            procedures to restore mobility, alleviate pain, and improve the overall quality of life for our patients. Whether you're dealing 
            with sports injuries, degenerative conditions, or other orthopedic issues affecting the knee, our dedicated team is here to provide 
            comprehensive and personalized care.</p>
          </div>
          
        </div>
      </div>
      {/* Card 2 */}
      <div className="w-full lg:max-w-full lg:flex">
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: "url('/hip.png')" }} title="Hip">
        </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
          <p className="text-sm text-gray-600 flex items-center">
                Dr.Suriya's Ortho
              
            </p>
            <div className="text-gray-900 font-bold text-xl mb-2">Hip Surgery</div>
            <p className="text-gray-700 text-base">Discover exceptional hip care at Dr.Suriya ortho, where our orthopedic specialists are 
            dedicated to restoring your hip function and enhancing your overall well-being. Whether you're facing hip arthritis, fractures, 
            or other orthopedic issues, our skilled surgeons are committed to providing personalized and comprehensive solutions.</p>
          </div>
          
        </div>
      </div>
      {/* Card 3 */}
      <div className="w-full lg:max-w-full lg:flex">
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: "url('/spine.png')" }} title="Spine">
        </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
                Dr.Suriya's Ortho
             
            </p>
            <div className="text-gray-900 font-bold text-xl mb-2">Spine Surgery</div>
            <p className="text-gray-700 text-base">Welcome to Dr.Suriya ortho, where our esteemed orthopedic surgeons specialize in advanced 
            spine surgery, providing comprehensive solutions for various spinal conditions. We understand the impact that spine issues can 
            have on your daily life, and our dedicated team is here to offer expert care, utilizing cutting-edge techniques and personalized 
            treatment plans.</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default BoxCard;
