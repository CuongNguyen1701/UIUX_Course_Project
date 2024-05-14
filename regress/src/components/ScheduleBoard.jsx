import React from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const events = [
    { title: 'Meeting', start: new Date() }
]

// a custom render function
function renderEventContent(eventInfo) {
    return (
        <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
        </>
    )
}

const ScheduleBoard = () => {
    return (
        <div className="size-1/2 flex items-center justify-center">
            <FullCalendar
                height={'auto'}
                plugins={[dayGridPlugin]}
                initialView='dayGridMonth'
                weekends={true}
                events={events}
                eventContent={renderEventContent}
            />
        </div>
    )
}

export default ScheduleBoard;