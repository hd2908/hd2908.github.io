import React, { useState, FunctionComponent } from 'react'
import Airplane from '@icons/airplane.svg'
import Airplane2 from '@icons/airplane2.svg'
import Airplane3 from '@icons/airplane3.svg'
const BoardingInfo: FunctionComponent = function () {
  return (
    <>
      {/* 반응형 width 제어 */}
      <div className="w-full flex items-center gap-8 h-full">
        <div className="flex flex-col text-gray-700 justify-between h-full">
          <div>
            <p className="text-gray-400 font-medium">FROM</p>
            <p className="text-5xl font-bold">KOR</p>
            <p className="text-xl font-bold">SEOUL</p>
          </div>
          <div>
            <p className="text-gray-400 font-medium">BOARDING TIME</p>
            <p className="text-2xl font-bold">1998.12.29</p>
          </div>
        </div>
        <div className="flex flex-col text-gray-700"></div>
        <div className="flex flex-col text-gray-700 justify-between h-full">
          <div>
            <p className="text-gray-400 font-medium">FROM</p>
            <p className="text-xl font-bold">SEOUL</p>
          </div>
          <div>
            <p className="text-gray-400 font-medium">EMAIL</p>
            <p className="text-sm font-bold">LIMHD6958@GMAIL.COM</p>
          </div>
        </div>
        <div className="flex flex-col text-gray-700"></div>
      </div>
    </>
  )
}

export default BoardingInfo
