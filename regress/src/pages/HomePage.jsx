import React from 'react'
import { LeftBar, ScheduleBoard, Title } from '../components'

const HomePage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-screen bg-white">
      <Title title="Trang chủ" />
      <div>
        <ScheduleBoard />
      </div>
    </div>
  )
}

export default HomePage
