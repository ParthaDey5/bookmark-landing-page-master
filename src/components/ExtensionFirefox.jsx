import React from 'react'

function ExtensionFirefox() {
  return (
    <div className='lg:shadow-md shadow-lg w-[75rem] lg:w-[19.5rem] h-[97rem] lg:h-[27rem] col-x-center lg:pt-16 pt-45 rounded-[1.5rem] lg:translate-y-12'>
        <img src="/images/logo-firefox.svg" alt="logo-firefox" srcset="" className='w-105 lg:w-30' />
        <h3 className='translate-y-35 lg:translate-y-8'>Add to Firefox</h3>
        <p
        className='translate-y-40 lg:translate-y-9 lg:text-[1rem]!'>Minimum version 55</p>
        <img src="/images/bg-dots.svg" alt="bg-dots" srcset="" className='w-full translate-y-75 lg:translate-y-18'/>
        <button className='w-250! lg:w-60! blue600 hover:bg-white! hover:text-[hsl(231,69%,60%)]! hover:border-2 hover:border-[[hsl(231,69%,60%)]] translate-y-102  lg:translate-y-26'>
            Add & Install Extension
            </button>  
  

    </div>
  )
}

export default ExtensionFirefox