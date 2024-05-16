import React from 'react'
import { LeftBar, ScheduleBoard, Tittle, LineChart } from '../components'

const HomePage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-screen bg-white">
      <Tittle title="Trang chủ" />
      {/* <div>
        <LineChart width={"100%"} height={"300px"} />
      </div> */}
      <ScheduleBoard />
    </div>
  )
}

export default HomePage
