import React from 'react'

function ExtensionOpera() {
  return (
 <div className='lg:shadow-md shadow-lg w-[75rem] lg:w-[19.3rem] h-[97rem] lg:h-[27rem] flex col-x-center lg:pt-16 pt-45 rounded-[1.5rem] lg:translate-y-22'>
        <img src="/images/logo-opera.svg" alt="logo-opera" srcset="" className='w-105 lg:w-28' />
        <h3 className='translate-y-27 lg:translate-y-9'>Add to Opera</h3>
        <p
        className='translate-y-30 lg:translate-y-10 lg:text-[1rem]!'>Minimum version 46</p>
        <img src="/images/bg-dots.svg" alt="bg-dots" srcset="" className='w-full translate-y-66 lg:translate-y-20'/>
        <button className='w-250! lg:w-65! blue600 hover:bg-white! hover:text-[hsl(231,69%,60%)]! hover:border-2 hover:border-[[hsl(231,69%,60%)]] translate-y-92 lg:translate-y-27'>
            Add & Install Extension
            </button>  
  

    </div>
  )
}

export default ExtensionOpera