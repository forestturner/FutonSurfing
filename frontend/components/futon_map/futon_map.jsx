import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import MarkerManager from '../../util/maker_manger';


class FutonMap extends React.Component{
  constructor(props) {
   super(props);
   this.count = 0;
   this.state = {
     lat:"",
     lng:"",
     bounds:null
   };
   this.defaultProps = this.props;
}

  componentDidMount() {
    let mapEl = document.getElementById('map');
    let options = {
     center: {lat: this.props.coords.lat, lng: this.props.coords.lng},
     zoom: 12
   };
   this.map = new google.maps.Map(mapEl, options);
   this.MarkerManager = new MarkerManager(this.map);
   this.MarkerManager.updateMarkers(this.props.futons);
   this.map.addListener('idle', () => {
     let bounds = this.map.getBounds();
     let ne = {lat: bounds.getNorthEast().lat(), lng: bounds.getNorthEast().lng()};
     let sw = {lat: bounds.getSouthWest().lat(), lng: bounds.getSouthWest().lng()};
     bounds = {northEast: ne, southWest: sw};
     this.props.updateBounds(bounds);
   });

   if(this.props.singleFuton){
     this.map.setZoom(16);
   }
 }
  componentDidUpdate(prevProps){
    this.MarkerManager.updateMarkers(this.props.futons);
    if (this.defaultProps.coords.lat != this.props.coords.lat && this.defaultProps.coords.lng != this.props.coords.lng) {
      this.map.setCenter({lat: this.props.coords.lat,   lng: this.props.coords.lng});
      this.defaultProps = this.props
    }
  }


  _handleMarkerClick(futon){
    this.props.router.push("futons/" + futon.id );
  }


  render() {
    return (
        <div id="map" className="map" ref="map">Map</div>
    );
  }
}



export default withRouter(FutonMap);
