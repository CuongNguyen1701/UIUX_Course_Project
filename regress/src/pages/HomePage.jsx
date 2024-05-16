import React from 'react'
import { LeftBar, ScheduleBoard, Title, LineChart } from '../components'

const HomePage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-screen bg-white">
      <Title title="Trang chủ" />
      <div className='pt-20'>
        <LineChart width={"100%"} height={"250px"} />
      </div>
      <ScheduleBoard />
    </div>
  )
}

export default HomePage
