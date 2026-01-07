import React from 'react'

function ExtensionChrome() {
  return (
    <div className='w-[75rem] lg:w-[20rem] h-[97rem] lg:h-[27rem] col-x-center lg:pt-16 pt-45 rounded-[1.5rem] lg:shadow-md shadow-lg'>
        <img src="/images/logo-chrome.svg" alt="logo-chrome" srcset="" className='w-105 lg:w-30' />
        <h3 className='translate-y-32 lg:translate-y-9'>Add to Chrome</h3>
        <p
        className='translate-y-37 lg:translate-y-9 lg:text-[1rem]!'>Minimum version 62</p>
        <img src="/images/bg-dots.svg" alt="bg-dots" srcset="" className='w-full translate-y-71 lg:translate-y-18'/>
        <button className='w-250! lg:w-65! blue600 hover:bg-white! hover:text-[hsl(231,69%,60%)]! hover:border-2 hover:border-[[hsl(231,69%,60%)]] translate-y-98 lg:translate-y-26'>
            Add & Install Extension
            </button>  
  

    </div>
  )
}

export default ExtensionChrome