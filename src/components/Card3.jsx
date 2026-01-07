import React from 'react'

function Card3() {
  return (
    <div 
    id="illustration-features-tab-3"
    className="relative col-x-center lg:row-x-start w-full mt-70 lg:mt-0">


    <img src="./images/illustration-features-tab-3.svg" alt="illustration-features-tab-2" srcset="" className="w-325 lg:w-122 h-fit lg:translate-x-68 translate-x-10 lg:lg:translate-y-20 -translate-y-15 z-5"/>
      <div className="absolute top-[13rem] lg:top-0 lg:translate-y-44 left-0 lg:w-178 w-330 lg:h-98 h-222 rounded-r-[50rem] blue950 -z-5"></div>
      <div className="flex flex-col lg:items-start lg:translate-x-108 lg:translate-y-5">
        <h2 className="mt-22 lg:mt-0 lg:translate-y-9 whitespace-nowrap">Share your bookmarks</h2>
        <p className="mt-10 lg:translate-y-6 w-340 lg:w-130">
          Easily share your bookmarks and collections with others. Create a shareable 
  link that you can send at the click of a button.
        </p>
        <button className="blue600 lg:translate-y-15 w-33! h-15! lg:block hidden">More Info</button>
      </div>
  </div>
  )
}

export default Card3