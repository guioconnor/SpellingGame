import React from 'react';
import { NavLink } from "react-router-dom";
import moment from 'moment';
import glamorous from 'glamorous';

import { getGreetingTime, daysOfWeek } from '../../../lib/timeHelpers';

const StyledDashboard = glamorous.div({
  minHeight: '100vh',
});

const StyledGreeting = glamorous.div({
  fontSize: '100px',
  textAlign: 'center',
  padding: '100px 0',
})

const StyledDay = glamorous.div({
  fontSize: '120px',
  textAlign: 'center',
  padding: '100px 0',
})

const Greeting = ({ timeOfDay }) =>
  timeOfDay ?
    <StyledGreeting>Good {timeOfDay}</StyledGreeting> :
    null;

const Day = ({ dayOfTheWeek }) =>
  dayOfTheWeek ?
    <StyledDay>Happy {dayOfTheWeek}</StyledDay> :
    null;

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dayOfWeek: null,
      timeOfDay: null,
    }
  }

  componentWillMount = () => {
    const m = moment();

    this.setState({
      dayOfWeek: daysOfWeek[m.format('e')],
      timeOfDay: getGreetingTime(m),
    })
  }

  render() {
    return (
      <StyledDashboard>
        <Greeting timeOfDay={this.state.timeOfDay} />
        <Day dayOfTheWeek={this.state.dayOfWeek} />
        <NavLink
          to={`/animals`}>
          Animals
        </NavLink>
        <NavLink
          to={`/letters`}>
          Letters
        </NavLink>
      </StyledDashboard>
    );
  }
}

export default Dashboard;