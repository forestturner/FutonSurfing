import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import MarkerManager from '../../util/maker_manger';

let _mapOptions = {center: {lat: 37.753972, lng: -122.431297},zoom: 8};

class FutonMap extends React.Component{

  componentDidMount() {
    const map = this.refs.map;


    // var input = document.getElementById('pac-input');
    // var searchBox = new google.maps.places.SearchBox(input);
    // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    this.map = new google.maps.Map(map, _mapOptions);


    this.MarkerManager = new MarkerManager(this.map, this._handleMarkerClick.bind(this));
    if(this.props.singleFuton){
      this.props.requestFuton(this.props.futonId);
    } else {
      this._registerListeners();
      this.MarkerManager.updateMarkers(this.props.futons);
    }
  }

  componentDidUpdate(){
    this.MarkerManager.updateMarkers(this.props.futons);
  }



  _registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat:north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateFilter('bounds', bounds);
    });
    google.maps.event.addListener(this.map, 'click', event => {
      const coords = _getCoordsObj(event.latLng);
      this._handleClick(coords);
    });
  }

  _handleMarkerClick(futon){
    this.props.router.push("futons/" + futon.id );
  }

  _handleClick(coords) {
    this.props.router.push({
      pathname: "futons/new",
      query: coords
    });
  }





  render() {

    return (


        <div className="map" ref="map">Map</div>


    );
  }
}




// var divStyle = {
//   width: width
//   height:height
// };
//
// ReactDOM.render(<div style={divStyle}>Hello World!</div>, mountNode);
//
//

export default withRouter(FutonMap);

// let _mapOptions = {
//   center: {lat: 37.773972, lng: -122.431297}, //San Francisco
//   zoom: 13
// };
//
// class FutonMap extends React.Component{
//
//   componentDidMount() {
//     const map = this.refs.map;
//     this.map = new google.maps.Map(map, _mapOptions);
//     this.MarkerManager = new MarkerManager(this.map, this._handleMarkerClick.bind(this));
//     if(this.props.singleFuton){
//       this.props.requestFuton(this.props.futonId);
//     } else {
//       this._registerListeners();
//       this.MarkerManager.updateMarkers(this.props.futons);
//     }
//   }
//
//   componentDidUpdate(){
//     this.MarkerManager.updateMarkers(this.props.futons);
//   }
//
//   render() {
//     return <div className="map" ref="map">Map</div> ;
//   }
// }
//
// export default withRouter(FutonMap);
//
//

//
// _handleClick(coords) {
//   this.props.router.push({
//     pathname: "futons/new",
//     query: coords
//   });
// }

//
// _registerListeners() {
//   google.maps.event.addListener(this.map, 'idle', () => {
//     const { north, south, east, west } = this.map.getBounds().toJSON();
//     const bounds = {
//       northEast: { lat:north, lng: east },
//       southWest: { lat: south, lng: west } };
//     this.props.updateFilter('bounds', bounds);
//   });
//   google.maps.event.addListener(this.map, 'click', event => {
//     const coords = _getCoordsObj(event.latLng);
//     this._handleClick(coords);
//   });
// }
//
// _handleMarkerClick(futon){
//   this.props.router.push("futons/" + futon.id );
// }
