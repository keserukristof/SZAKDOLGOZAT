import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  ViewState,
  EditingState,
  IntegratedEditing
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  MonthView,
  Toolbar,
  TodayButton,
  DateNavigator,
  ViewSwitcher,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  ConfirmationDialog,
  AllDayPanel
} from "@devexpress/dx-react-scheduler-material-ui";

import { appointments } from "../../data/appointments";
import {getCurrentDate} from "../../utils/Date"

class TimeTableComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: appointments,
      currentDate: getCurrentDate()
    };

    this.commitChanges = this.commitChanges.bind(this);
  }

  commitChanges({ added, changed, deleted }) {
    this.setState(state => {
      let { data } = state;
      if (added) {
        const startingAddedId =
          data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map(appointment =>
          changed[appointment.id]
            ? { ...appointment, ...changed[appointment.id] }
            : appointment
        );
      }
      if (deleted !== undefined) {
        data = data.filter(appointment => appointment.id !== deleted);
      }
      return { data };
    });
  }

  render() {
    const { currentDate, data } = this.state;

    return (
      <Paper>
        <Scheduler data={data} height={850}>
          <ViewState deafultCurrentDate={currentDate} />
          <EditingState onCommitChanges={this.commitChanges} />
          <IntegratedEditing />
          <WeekView startDayHour={6} endDayHour={22} />
          <MonthView/>

          <Toolbar />
          <TodayButton />
          <DateNavigator />
          <ViewSwitcher />
          <ConfirmationDialog />
          <Appointments />
          <AppointmentTooltip showOpenButton showDeleteButton />
          <AppointmentForm />
          <AllDayPanel />
        </Scheduler>
      </Paper>
    );
  }
}

export default TimeTableComponent;
