import React from 'react'

function Card2() {
  return (
    
    <div
    id="illustration-features-tab-2"
    className="relative col-x-center lg:row-x-start w-full mt-70 lg:mt-0">
      
      <img src="./images/illustration-features-tab-2.svg" alt="illustration-features-tab-2" srcset="" className="w-330 lg:w-132 h-fit lg:translate-x-68 translate-x-1 lg:lg:translate-y-20 -translate-y-10 z-5"/>
      <div className="absolute top-50 lg:top-[10rem] left-0 lg:w-175 w-330 lg:h-100 h-222 rounded-r-[50rem] blue950 -z-5"></div>
      <div className="flex flex-col lg:items-start lg:translate-x-98">
        <h2 className="mt-15 lg:mt-0 lg:translate-y-9 whitespace-nowrap">Intelligent search</h2>
        <p className="mt-10 lg:translate-y-6 w-330 lg:w-130">
          Our powerful search feature will help you find saved sites in no time at all. 
          No need to trawl through all of your bookmarks.
        </p>
        <button className="blue600 lg:translate-y-15 w-33! h-15! lg:block hidden">More Info</button>
      </div>
    </div>
  )
}

export default Card2