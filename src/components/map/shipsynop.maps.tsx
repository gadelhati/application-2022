// // https://dev.to/matheusribak/ola-coleguinha-vamos-aprender-a-usar-a-api-google-maps-com-react-18h5
// import React, { Component } from 'react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';

// export class MapContainer extends Component {
//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         zoom={7}
//         initialCenter={{ lat: -27.0922364, lng: -52.6166878 }}
//       >
//       </Map>
//     );
//   }
// }
// export default GoogleApiWrapper(
//   (props) => ({
//     apiKey: 'AQUI DEVE SER INFORMADA SUA KEY',
//   }
// ))(MapContainer)



import React from "react"
// import GoogleMapReact, { Map, GoogleApiWrapper, Marker } from "google-map-react"
import GoogleMapReact from "google-map-react"

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export const ShipSynopMaps = () => {

  const defaultProps = {
    center: {
      lat: -22.8763560,
      lng: -43.1302627
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '85vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={-22.8763560}
          lng={-43.1302627}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}




// import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import GoogleMapReact from 'google-map-react';

// const Wrapper = styled.main`
//   width: 100%;
//   height: 100%;
// `;

// const GoogleMap = ({ children, ...props }) => (
//   <Wrapper>
//     <GoogleMapReact
//       bootstrapURLKeys={{
//         key: process.env.REACT_APP_MAP_KEY,
//       }}
//       {...props}
//     >
//       {children}
//     </GoogleMapReact>
//   </Wrapper>
// );

// GoogleMap.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.node,
//     PropTypes.arrayOf(PropTypes.node),
//   ]),
// };

// GoogleMap.defaultProps = {
//   children: null,
// };

// export default GoogleMap;