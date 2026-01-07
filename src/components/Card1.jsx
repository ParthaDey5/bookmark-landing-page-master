import React from 'react'

function Card1() {
  return (
    
        <div
    id="illustration-features-tab-1" className="relative col-x-center lg:row-x-start  w-full mt-70 lg:mt-0">
      <img src="./images/illustration-features-tab-1.svg" alt="illustration-features-tab-1" srcset="" className="w-333 lg:w-150 h-fit lg:ml-47 lg:mt-20 z-5"/>
      <div className="absolute top-[10rem] lg:top-[11rem] left-0 lg:w-180 w-330 lg:h-97 h-222 rounded-r-[50rem] blue950 -z-5"></div>
      <div className="flex flex-col lg:items-start lg:ml-33">

        <h2 className="mt-87 lg:mt-0 lg:translate-y-[2rem] whitespace-nowrap">Bookmark in one click</h2>
        <p className="mt-10 lg:translate-y-[1.2rem] w-340 lg:w-130">
          Organize your bookmarks however you like. Our simple drag-and-drop interface 
          gives you complete control over how you manage your favourite sites.
        </p>
        <button className="blue600 lg:translate-y-14 w-33! lg:block hidden">More Info</button>
      </div>
    </div>
    
  )
}

export default Card1