import React, { useState, FunctionComponent } from 'react'
import BoardingInfo from './BoardingInfo'

const BoardingPass: FunctionComponent = function () {
  const [flag, setFlag] = useState<boolean>(false)
  return (
    <>
      {/* 반응형 width 제어 */}
      <a
        aria-roledescription="button"
        onClick={() => {
          setFlag(!flag)
        }}
        className={`flex w-[1000px] items-center rounded-2xl relative cursor-pointer`}
      >
        <div className="flex flex-col w-2/3 relative boarding-shadow">
          <div
            className={`w-full bg-blue-700 p-4 pl-6 text-white font-bold text-xl h-[64px] flex items-center rounded-tl-2xl border-r-gray-30 border-r-2 border-dashed z-[1] ${flag && 'border-none'}`}
          >
            BOARDING PASS
          </div>
          <div
            className={`w-full bg-white  h-72 rounded-bl-2xl border-r-gray-300 border-r-2 border-dashed z-[1] p-8 ${flag && 'border-none'}`}
          >
            <BoardingInfo />
          </div>
        </div>
        <div
          className={`flex flex-col w-1/3 rounded-tr-2xl absolute right-0 transition-transform ticket-shadow ${flag && 'translate-x-6 rotate-6'}`}
        >
          <div
            className={`w-full bg-blue-700 p-4 pr-6 text-white font-bold h-[64px] flex items-center text-center justify-center rounded-tr-2xl z-[1]`}
          >
            ✈️BOARDING PASS
          </div>
          <div className="w-full bg-white h-72 rounded-br-2xl z-[1] p-8"></div>
        </div>
      </a>
    </>
  )
}

export default BoardingPass
