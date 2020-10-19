import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { MdEvent } from 'react-icons/md';
import { TwitterShareButton, TwitterIcon } from 'react-share';
import api from '../../services/api';
import Footer from "../../components/Footer";
import HighLightedEvents from "../../components/HighLightedEvents";

import { EventList, GoToEvent, Title } from './styles';

class Home extends Component {
  state = {
    events: [],
  };

  async componentDidMount() {
    const response = await api.get('events');

    const data = response.data.events.map((event) => ({
      ...event,
    }));

    this.setState({ events: data });
  }

  render() {
    const { events } = this.state;

    return (
      <div>
        <HighLightedEvents />
        <Title>All Events</Title>
        <EventList>
          {events.map((event) => (
            <li key={event.id}>
              <img src={event.eventImage} alt={event.title} />
              <strong>{event.title}</strong>
              <span>Location: {event.location}</span>
              <button
                type="button"
              >
                <div>
                  <MdEvent size={16} />
                </div>
                <GoToEvent>
                  <Link to={`/event/${event.id}`} style={{ textDecoration: 'none' }}>
                    <span to={`/event/${event.id}`}> VIEW EVENT DETAILS </span>
                  </Link>
                </GoToEvent>
              </button>
              <button>
                <TwitterShareButton url={window.location.href} 
                  title={`I'm going to ${event.title} @ ${event.dates}.`}
                >
                  <TwitterIcon size={32} round  />
                  <span> TWEET THIS EVENT</span>
                </TwitterShareButton>
              </button>
            </li>
          ))}
          <Footer />
        </EventList>
      </div>
    );
  }
}

export default Home;