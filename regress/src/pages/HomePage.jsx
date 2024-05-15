import React from 'react'
import { LeftBar, ScheduleBoard, Tittle } from '../components'

const HomePage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen min-w-screen">
      <Tittle title="Trang chủ" />
      <ScheduleBoard />
    </div>
  )
}

export default HomePage
