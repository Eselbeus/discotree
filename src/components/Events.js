import React from 'react'
import tickets from '../assets/tickets.jpg'
import '../App.css';

function Event(){
  return(
    <div className='event' id='events'>
      <h1>Upcoming Events</h1>
      <div className="ticket-container">
        <div className="inner-ticket-container">
          <img src={tickets}/>
          <h2>NEED TICKETS?</h2>
        </div>
        <a href="https://www.eventbrite.com/o/disco-tree-entertainment-32953626885?aff=eand"><button className="ticket-button">Get Tickets</button></a>
      </div>
      <div className="component-footer">
        <div className="fill">
        </div>
      </div>
    </div>
  )
}

export default Event;
