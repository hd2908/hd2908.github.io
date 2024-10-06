import React, { FunctionComponent } from 'react'
import BoardingPass from '../components/Main/BoardingPass'
const IndexPage: FunctionComponent = function () {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-blue-400">
      <BoardingPass></BoardingPass>
    </div>
  )
}

export default IndexPage
