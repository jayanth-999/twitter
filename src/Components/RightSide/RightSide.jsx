import React from 'react'

function RightSide() {
  return (
    <div className='py-5 sticky top-0 overflow-y-hidden'>
        <div className='hideScrollbar overflow-y-scroll'>
            <div className='relative flex items-center'>
                <input type="text" 
                placeholder='Search'
                className={`py-3 rounded-full outline-none text-gray-500 w-full pl-12 ${
                    'light' === "light" ? "bg-slate-300" : "bg-[#151515]"
                  }`}
                />
            </div>
        </div>
        RightSide

    </div>
  )
}

export default RightSide