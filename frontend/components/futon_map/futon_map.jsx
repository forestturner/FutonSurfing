import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import MarkerManager from '../../util/maker_manger';


class FutonMap extends React.Component{
  constructor(props) {
   super(props);
<<<<<<< HEAD
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
     zoom: 11
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


=======
   this.defaultProps = props;
 }

  componentDidMount() {
    const map = this.refs.map;
    let options = {
     center: {lat: this.props.coords.lat, lng: this.props.coords.lng},
     zoom: 9
   };

    //
    // var input = document.getElementById('pac-input');
    // var searchBox = new google.maps.places.SearchBox(input);
    // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    this.map = new google.maps.Map(map, options);
    this.map.setCenter({lat: this.props.coords.lat, lng: this.props.coords.lng});

    this.MarkerManager = new MarkerManager(this.map, this._handleMarkerClick.bind(this));
    if(this.props.singleFuton){
      this.props.requestFuton(this.props.futonId);
    } else {
      this._registerListeners();
      this.MarkerManager.updateMarkers(this.props.futons);
    }
    // const { north, south, east, west } = this.map.getBounds().toJSON();
    //      const bounds = {
    //        northEast: { lat:north, lng: east },
    //        southWest: { lat: south, lng: west } };
    //
    //      this.props.updateFilter('bounds', bounds);






  }

  componentDidUpdate(){
    const map = this.refs.map;
    let options = {
     center: {lat: this.props.coords.lat, lng: this.props.coords.lng},
     zoom: 9
   };

    //
    // var input = document.getElementById('pac-input');
    // var searchBox = new google.maps.places.SearchBox(input);
    // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // this.map = new google.maps.Map(map, options);


    this.MarkerManager = new MarkerManager(this.map, this._handleMarkerClick.bind(this));
    if(this.props.singleFuton){
      this.props.requestFuton(this.props.futonId);
    } else {
      this._registerListeners();
      this.MarkerManager.updateMarkers(this.props.futons);
    }




    this.MarkerManager.updateMarkers(this.props.futons);
    if (this.defaultProps.coords.lat != this.props.coords.lat && this.defaultProps.coords.lng != this.props.coords.lng) {

      this.defaultProps = this.props
    }






  }



  _registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat:north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateFilter('bounds', bounds);
    });
    // google.maps.event.addListener(this.map, 'click', event => {
    //   const coords = _getCoordsObj(event.latLng);
    //   this._handleClick(coords);
    // });
  }

>>>>>>> e4941b82c680c0d74294ceb469ed7ba97c52008e
  _handleMarkerClick(futon){
    this.props.router.push("futons/" + futon.id );
  }

<<<<<<< HEAD

  render() {
    return (
        <div id="map" className="map" ref="map">Map</div>
=======
  // _handleClick(coords) {
  //   this.props.router.push({
  //     pathname: "futons/new",
  //     query: coords
  //   });
  // }





  render() {

    return (


        <div className="map" ref="map">Map</div>


>>>>>>> e4941b82c680c0d74294ceb469ed7ba97c52008e
    );
  }
}



<<<<<<< HEAD
export default withRouter(FutonMap);
=======

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
>>>>>>> e4941b82c680c0d74294ceb469ed7ba97c52008e
