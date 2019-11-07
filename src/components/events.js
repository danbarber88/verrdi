import React, { Component } from "react"
import EventCard from "./eventCard"

class Events extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
    }
  }

  fetchEvents = async () => {
    const response = await fetch(
      `https://www.eventbriteapi.com/v3/users/me/events/?expand=ticket_availability,venue,ticket_classes&token=${process.env.GATSBY_EVENTBRITE_API_KEY}`
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
            {this.state.data.map(
              event =>
                event.status === "live" && (
                  <EventCard
                    key={event.id}
                    id={event.id}
                    image={event.logo && event.logo.original.url}
                    name={event.name.text}
                    startDate={event.start.local}
                    endDate={event.end.local}
                    placesRemaining={
                      event.ticket_classes[0].capacity -
                      event.ticket_classes[0].quantity_sold
                    }
                    street={event.venue && event.venue.address.address_1}
                    city={event.venue && event.venue.address.city}
                    postCode={event.venue && event.venue.address.postal_code}
                    price={
                      event.ticket_availability.maximum_ticket_price.value / 100
                    }
                    url={event.url}
                  />
                )
            )}
          </div>
        )}
      </div>
    )
  }
}

export default Events
