import React from 'react'
import { LeftBar, ScheduleBoard } from '../components'

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2>Trang chủ</h2>
      <div>
        <ScheduleBoard />
      </div>
    </div >
  )
}

export default HomePage
