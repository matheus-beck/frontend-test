import React, { Component } from 'react';

import { EventFormButton, EventFormInputs } from "./styles";

import api from '../../services/api';

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: '',
      eventImage: '',
      description: '',
      location: '',
      dates : [
        "07/27/2015 13:00",
        "07/28/2015 13:00",
        "07/29/2015 13:00",
        "07/30/2015 13:00",
        "07/31/2015 13:00",
        "07/1/2015 13:00"
      ],
    };
  }

  handleChange  = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val} );
  }

  handleSubmit = (event) => {
    console.log(this.state)
    let body = { event: this.state } 
    console.log(JSON.stringify(body))
      fetch('http://localhost:3000/events', {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(body)
      }).then(function(response) {
        console.log(response);
        return response.json();
      });

    event.preventDefault();
    this.props.history.goBack();
  }

  render() {
    return (
      <EventFormInputs>
        <h1>Create New Event {this.state.eventname} {this.state.age}</h1>
        <p>Enter the Event name:</p>
        <input
          type='text'
          name='title'
          onChange={this.handleChange}
        />
        <p>Event image URL:</p>
        <input
          type='text'
          name='eventImage'
          onChange={this.handleChange}
        />
        <p>Description:</p>
        <input
          type='text'
          name='description'
          onChange={this.handleChange}
        />
        <p>Location:</p>
        <input
          type='text'
          name='location'
          onChange={this.handleChange}
        />
        <p>Dates:</p>
        <input
          type='text'
          name='dates'
          onChange={this.handleChange}
        />
        <EventFormButton>
        <div>
          <button onClick={this.handleSubmit}><span>Create Event</span></button>
        </div>
        </EventFormButton>
      </EventFormInputs>
    );
  }
}

export default EventForm;