/* eslint-disable react/destructuring-assignment */
import * as React from 'react';

import axios from 'axios';

import { AuthContext } from '../../context/auth-contex';
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

import Paper from '@material-ui/core/Paper';

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
  static contextType = AuthContext;
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
    const auth = this.context;
    const userId = auth.userId;
    console.log(auth.userId);
    axios
      .get(`http://localhost:5000/api/appointments/user/${userId}`, {
        headers: {
          Authorization: 'Bearer ' + auth.token,
        },
      })
      .then((res) => {
        const appointmentsData = res.data;
        console.log(appointmentsData)
        this.setState({ data: appointmentsData.appointments }, () => {
          console.log('Appointments fetched', appointmentsData);
        });
      });
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
    const auth = this.context;
    this.setState((state) => {
      let { data } = state;
      if (added) {
        const startingAddedId =
          data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [
          ...data,
          { ...added, creator: auth.userId, id: startingAddedId },
        ];
        console.log(data[data.length - 1]);
        const userId = auth.userId;
        fetch('http://localhost:5000/api/appointments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + auth.token,
          },
          body: JSON.stringify(data[data.length - 1]),
        })
          .then((result) => {
            console.log(result);
          })
          .catch((err) => {
            console.log(err);
          })
          .then(() => {
            axios
              .get(`http://localhost:5000/api/appointments/user/${userId}`, {
                headers: {
                  Authorization: 'Bearer ' + auth.token,
                },
              })
              .then((res) => {
                const appointmentsData = res.data;
                this.setState({ data: appointmentsData.appointments }, () => {
                  console.log('Appointments fetched', appointmentsData);
                });
              });
          });
      }
      if (changed) {
        console.log(changed)
        const changedId = Object.keys(changed)[0];
        const appointmentToChange = data.find(appointment => appointment.id.toString() === changedId)
        const changedAppointment = ({ ...appointmentToChange, ...changed[appointmentToChange.id]})
        let changed_id = appointmentToChange._id
        data = data.map(appointment => (
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
        fetch(
          `http://localhost:5000/api/appointments/${changed_id}`,
          {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + auth.token,
            },
            body: JSON.stringify(changedAppointment),
          }
        )
          .then((result) => {
            console.log(result);
          })
          .catch((err) => {
            console.log(err);
          })
      }
      if (deleted !== undefined) {
        console.log(deleted);
        const appointmentToDelete = data.find((appointment) => {
          return appointment.id === deleted
        });
        const appointmentToDelete_id = appointmentToDelete._id;
        data = data.filter((appointment) => {
          return appointment.id !== deleted;
        });
        fetch(
          `http://localhost:5000/api/appointments/${appointmentToDelete_id}`,
          {
            method: 'DELETE',
            headers: {
              Authorization: 'Bearer ' + auth.token,
            },
          }
        )
          .then((response) => console.log(response))
          .catch((err) => console.log(err));
        
      }
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
