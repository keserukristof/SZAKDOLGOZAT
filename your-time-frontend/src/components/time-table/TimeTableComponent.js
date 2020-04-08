/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  DragDropProvider,
  EditRecurrenceMenu,
  AllDayPanel,
  MonthView,
  Toolbar,
  TodayButton,
  DateNavigator,
  ViewSwitcher,
  ConfirmationDialog,
} from '@devexpress/dx-react-scheduler-material-ui';


const dragDisableIds = new Set([]);

const allowDrag = ({ id }) => !dragDisableIds.has(id);
const appointmentComponent = (props) => {
  if (allowDrag(props.data)) {
    return <Appointments.Appointment {...props} />;
  }
  return (
    <Appointments.Appointment
      {...props}
      style={{ ...props.style, cursor: 'not-allowed' }}
    />
  );
};

class TimeTableComponent extends React.PureComponent {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      currentDate: new Date(),

      addedAppointment: {},
      appointmentChanges: {},
      editingAppointmentId: undefined,
    };

    this.onCommitChanges = this.commitChanges.bind(this);
    this.changeAddedAppointment = this.changeAddedAppointment.bind(this);
    this.changeAppointmentChanges = this.changeAppointmentChanges.bind(this);
    this.changeEditingAppointmentId = this.changeEditingAppointmentId.bind(
      this
    );
  }

  componentDidMount() {
    this._isMounted = true;
    fetch('/api/appointments')
      .then((res) => res.json())
      .then((appointments) =>
        this.setState({ data: appointments }, () =>
          console.log('Appointments fetched', appointments)
        )
      );
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  changeAddedAppointment(addedAppointment) {
    this.setState({ addedAppointment });
  }

  changeAppointmentChanges(appointmentChanges) {
    this.setState({ appointmentChanges });
  }

  changeEditingAppointmentId(editingAppointmentId) {
    this.setState({ editingAppointmentId });
  }

  commitChanges({ added, changed, deleted }) {
    this.setState((state) => {
      let { data } = state;
      if (added) {
        const startingAddedId =
          data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map((appointment) =>
          changed[appointment.id]
            ? { ...appointment, ...changed[appointment.id] }
            : appointment
        );
      }
      if (deleted !== undefined) {
        data = data.filter((appointment) => appointment.id !== deleted);
      }
      fetch('http://localhost:5000/api/appointments', {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data[data.length - 1])
      })
      .then(result => {
        console.log(result)
      })
      .catch(err => {
        console.log(err)
      })
      console.log(data)
      return { data };
    });
  }

  render() {
    const {
      data,
      currentDate,
      addedAppointment,
      appointmentChanges,
      editingAppointmentId,
    } = this.state;

    return (
      <Paper>
        <Scheduler data={data} height={750}>
          <ViewState defaultCurrentDate={currentDate} />
          <EditingState
            onCommitChanges={this.onCommitChanges}
            addedAppointment={addedAppointment}
            onAddedAppointmentChange={this.changeAddedAppointment}
            appointmentChanges={appointmentChanges}
            onAppointmentChangesChange={this.changeAppointmentChanges}
            editingAppointmentId={editingAppointmentId}
            onEditingAppointmentIdChange={this.changeEditingAppointmentId}
          />
          <WeekView startDayHour={7} endDayHour={20} />
          <MonthView />
          <AllDayPanel />
          <EditRecurrenceMenu />
          <ConfirmationDialog />
          <Toolbar />
          <TodayButton />
          <DateNavigator />
          <ViewSwitcher />
          <ConfirmationDialog />
          <Appointments appointmentComponent={appointmentComponent} />
          <AppointmentTooltip showOpenButton showDeleteButton />
          <AppointmentForm />
          <DragDropProvider allowDrag={allowDrag} />
        </Scheduler>
      </Paper>
    );
  }
}

export default TimeTableComponent;
