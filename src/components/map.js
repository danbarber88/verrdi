import React from "react"
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api"

// import mapIcon from '../images/map-icon.svg'
const mapStyles = require("../utils/mapStyles.json")

const Map = () => (
  <LoadScript googleMapsApiKey={process.env.GATSBY_GOOGLE_API_KEY}>
    <GoogleMap
      mapContainerStyle={{ height: "100%", width: "100%" }}
      zoom={10}
      center={{ lat: 53.755539, lng: -0.382404 }}
      options={{
        styles: mapStyles.styles,
        disableDefaultUI: true,
      }}
    >
      {/* <Marker
        icon={{
          url: mapIcon,
          scaledSize: { width: 32, height: 32 },
        }}
        position={{ lat: 53.755529, lng: -0.382204 }}
      /> */}
    </GoogleMap>
  </LoadScript>
)

export default Map
