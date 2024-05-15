import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const localizer = momentLocalizer(moment)

const events = [{ title: "Meeting", start: new Date() }];

// a custom render function
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

const ScheduleBoard = () => {
  return (
    <div className="flex items-center justify-center">
      <FullCalendar
        height={600}
        // contentHeight={'auto'}
        aspectRatio={3}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={events}
        eventContent={renderEventContent}
      />
    </div>
  );
};

// const ScheduleBoard = () => {
//   return (
//     <div>
//       <Calendar
//         localizer={localizer}
//         // events={myEventsList}
//         startAccessor="start"
//         endAccessor="end"
//         style={{ height: 500 }}
//       />
//     </div>
//   )
// }

export default ScheduleBoard;
