import React, { Component } from "react"
import EventCard from "./eventCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

const Loading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const Spinner = styled(FontAwesomeIcon)`
    color: ${props => props.theme.green};
    font-size: 70px;
    margin: 100px 0;
    width: auto;
`

const Error = styled.div`
    background-color: #791b1b;
    color: #fff;
    padding: 20px 10px;
    text-align: center;
    margin: 40px 0;
    border-radius: 10px;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.12), 1px 3px 4px rgba(0, 0, 0, 0.24),
        0px -1px 4px rgba(0, 0, 0, 0.25);

    a {
        color: ${props => props.theme.yellow};
    }
`

class Events extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            error: false,
        }
    }

    fetchEvents = async () => {
        const response = await fetch("/api/getCourses")
        const events = await response.json()

        if (events.data) {
            const upcomingEvents = events.data
                .filter(event => Date.now() < new Date(event.start.iso))
                .sort((a, b) => new Date(a.start.iso) - new Date(b.start.iso))

            this.setState({ loading: false, events: upcomingEvents })
        } else {
            this.setState({ loading: false, error: true })
        }

        console.log(events)
    }

    componentDidMount() {
        this.fetchEvents()
    }

    render() {
        if (this.state.error) {
            return (
                <Error>
                    <h3>Oops! Something went wrong.</h3>
                    <p>
                        Send an error report to help us improve your experience.
                    </p>
                    <a href="mailto:whoops@verrdi.co.uk">whoops@verrdi.co.uk</a>
                </Error>
            )
        }

        return (
            <div>
                {this.state.loading ? (
                    <Loading>
                        <Spinner icon={["fa", "spinner"]} spin />
                    </Loading>
                ) : (
                    <div>
                        {this.state.events.map(
                            event =>
                                event.tickets_available === "true" && (
                                    <EventCard
                                        key={event.id}
                                        id={event.id}
                                        image={
                                            event.images &&
                                            event.images.thumbnail
                                        }
                                        name={event.name}
                                        startDate={
                                            event.start && event.start.formatted
                                        }
                                        endDate={
                                            event.end && event.end.formatted
                                        }
                                        placesRemaining={
                                            event.ticket_types &&
                                            event.ticket_types[0].quantity -
                                                event.ticket_types[0]
                                                    .quantity_issued
                                        }
                                        online={event.online_event === "true"}
                                        onlineVenue={event.venue.name}
                                        // street={event.venue && event.venue.address.address_1}
                                        // city={event.venue && event.venue.address.city}
                                        // postCode={event.venue && event.venue.address.postal_code}
                                        price={
                                            event.ticket_types &&
                                            event.ticket_types[0].price
                                        }
                                        url={event.url}
                                        callToAction={event.call_to_action}
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
