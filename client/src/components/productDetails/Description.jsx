import React, { useState } from 'react';

function Description() {
  const [activeTab, setActiveTab] = useState('overview');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='min-h-[500px] px-4 md:px-8 lg:px-12 mt-[60px] '>
      <div className='flex flex-wrap gap-4 md:gap-6 lg:gap-8'>
        <p
          onClick={() => handleTabClick('overview')}
          className={`cursor-pointer text-lg md:text-xl font-normal font_poppins ${activeTab === 'overview' ? 'border-b-2 border-black' : 'border-b-2 border-transparent'}`}
        >
          Overview
        </p>
        <p
          onClick={() => handleTabClick('specifications')}
          className={`cursor-pointer text-lg md:text-xl font-normal font_poppins ${activeTab === 'specifications' ? 'border-b-2 border-black' : 'border-b-2 border-transparent'}`}
        >
          Specifications
        </p>
      </div>

      <div className='h-[1px] bg-[#EEEEEE] mb-4'></div> {/* Horizontal line */}

      <div>
        {activeTab === 'overview' && (
          <div>
            <ul className='list-disc pl-4 md:pl-6 lg:pl-8 space-y-2 text-sm md:text-base lg:text-lg'>
              <li>Display: 6.5-inch Full HD+ AMOLED</li>
              <li>Processor: Octa-core 2.84 GHz</li>
              <li>RAM: 8 GB</li>
              <li>Storage: 128 GB (expandable up to 512 GB)</li>
              <li>Camera: 48 MP Triple Rear Camera, 20 MP Front Camera</li>
              <li>Battery: 5000 mAh with Fast Charging</li>
              <li>Operating System: Android 12</li>
              <li>Color Options: Black, White, Blue, Green</li>
              <li>Price: $499.99</li>
            </ul>
          </div>
        )}

        {activeTab === 'specifications' && (
          <div>
            <ul className='list-disc pl-4 md:pl-6 lg:pl-8 space-y-2 text-sm md:text-base lg:text-lg font_poppins font-normal'>
              <li >Type: AMOLED</li>
              <li>Resolution: 1080 x 2400 pixels</li>
              <li>Refresh Rate: 90 Hz</li>
              <li>Type: Octa-core</li>
              <li>Speed: 2.84 GHz</li>
              <li>Storage: 128 GB (expandable up to 512 GB via microSD)</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Description;
