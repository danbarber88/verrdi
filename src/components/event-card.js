import React, { Component } from "react"

class EventCard extends Component {
  exampleCallback = () => {
    console.log("Order complete!")
  }

  componentDidMount() {
    window.EBWidgets.createWidget({
      widgetType: "checkout",
      eventId: this.props.id,
      modal: true,
      modalTriggerElementId: this.props.id,
      onOrderComplete: this.exampleCallback,
    })
  }

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <button id={this.props.id}>Book now</button>
      </div>
    )
  }
}

export default EventCard
