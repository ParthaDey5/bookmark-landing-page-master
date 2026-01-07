import React from 'react'

function Underline2({card2}) {
  return (
    <div className={`lg:h-0.75 bg-[hsl(0,94%,66%)] ${card2? "w-full  origin-center transition-transform ease-out duration-700" :"w-0"} absolute bottom-0`}>

    </div>
  )
}

export default Underline2