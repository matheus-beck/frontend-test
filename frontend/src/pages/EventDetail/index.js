import React, { Component } from 'react';

import { EventDetails } from './styles';
import api from '../../services/api';

class EventDetail extends Component {
  state = {
    event: [],
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await api.get(`events/${id}`);
    const data = response.data.event;

    this.setState({ event: data });
  }

  render(){
    const { event } = this.state;
    return (
      <EventDetails>
        <li key={event.id}>
          <strong>{event.title}</strong>
          <span>Location: {event.location}</span>
          <img src={event.eventImage} alt={event.title} />
          <span>Dates:</span>
          <li>
            {event.dates}
          </li>
          <span>Description:</span>
          <p>{event.description}</p>
        </li>
      </EventDetails>
    )
  }
}

export default EventDetail;
 
