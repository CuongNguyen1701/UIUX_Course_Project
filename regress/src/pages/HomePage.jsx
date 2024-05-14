import React from 'react'
import { LeftBar, ScheduleBoard } from '../components'

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2>Trang chủ</h2>
      <ScheduleBoard />
    </div>
  )
}

export default HomePage
