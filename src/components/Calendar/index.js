import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  ConfirmationDialog,
} from "@devexpress/dx-react-scheduler-material-ui";

const currentDate = "2020-11-11";
const schedulerData = [
  {
    startDate: "2020-11-09T12:00",
    endDate: "2020-11-09T17:00",
    title: "Planning",
  },
  {
    startDate: "2020-11-10T09:00",
    endDate: "2020-11-10T16:30",
    title: "Coding",
  },
  {
    startDate: "2020-11-11T09:45",
    endDate: "2020-11-11T16:00",
    title: "Coding",
  },
  {
    startDate: "2020-11-12T09:00",
    endDate: "2020-11-12T16:30",
    title: "Preparing presentation",
  },
  {
    startDate: "2020-11-13T13:00",
    endDate: "2020-11-13T16:30",
    title: "Presenting",
  },
];
function Calendar() {
  return (
    <div>
      <Paper>
        <Scheduler data={schedulerData}>
          <ViewState currentDate={currentDate} />
          <WeekView startDayHour={9} endDayHour={17} />
          <Appointments />
        </Scheduler>
      </Paper>
      ;
    </div>
  );
}
export default Calendar;
