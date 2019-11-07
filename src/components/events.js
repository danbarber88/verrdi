import React, { Component } from "react"
import EventCard from "./event-card"

class Events extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
    }
  }

  fetchEvents = async () => {
    const response = await fetch(
      `https://www.eventbriteapi.com/v3/users/me/events/?expand=ticket_availability&token=${process.env.GATSBY_EVENTBRITE_API_KEY}`
    )
    const data = await response.json()
    this.setState({ loading: false, data: data.events })
  }

  componentDidMount() {
    this.fetchEvents()
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div>LOADING</div>
        ) : (
          <div>
            {this.state.data.map(event => (
              <EventCard key={event.id} id={event.id} name={event.name.text} />
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default Events
