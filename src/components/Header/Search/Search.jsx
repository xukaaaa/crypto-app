import React, { forwardRef } from 'react'

function Search(props, ref) {
   return (
      <div
         onClick={props.onClick}
         ref={ref}
         className="ml-2 flex h-[39px] w-[260px] cursor-pointer items-center justify-start rounded-lg bg-[#1E1B3E] p-4 "
      >
         <span className="ml-2 text-[#ffffff] opacity-50">Search...</span>
      </div>
   )
}

export default forwardRef(Search)
