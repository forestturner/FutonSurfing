import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import MarkerManager from '../../util/maker_manger';


class FutonMap extends React.Component{
  constructor(props) {
   super(props);
   this.defaultProps = props;
   this.count = 0;
   this.state = {
     lat:"",
     lng:""
   };
   this.moved = false;
  //  this.fixMyPageOnce = this.fixMyPageOnce.bind(this);
}
// componentWillUnmount(){
//   debugger;
//   const { north, south, east, west } = this.map.getBounds().toJSON();
//   const bounds = {
//     northEast: { lat:north, lng: east },
//     southWest: { lat: south, lng: west }
//    };
//     this.props.updateFilter('bounds', bounds);
//
// }


  componentDidMount() {
    const map = this.refs.map;
    let options = {
     center: {lat: this.props.coords.lat, lng: this.props.coords.lng},
     zoom: 13
   };

   this.map = new google.maps.Map(map, options);
   this.map.setCenter({lat: this.props.coords.lat, lng: this.props.coords.lng});
   this.MarkerManager = new MarkerManager(this.map, this._handleMarkerClick.bind(this));

  //  if(this.props.singleFuton){
  //    this.props.requestFuton(this.props.futonId);
  //  } else {
     this._registerListeners();
     this.MarkerManager.updateMarkers(this.props.futons);
  //  }
  //  google.maps.event.addListenerOnce(this.map, 'tilesloaded', this.fixMyPageOnce);
  //   //
    // var input = document.getElementById('pac-input');
    // var searchBox = new google.maps.places.SearchBox(input);
    // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // const { north, south, east, west } = this.map.getBounds().toJSON();
    //      const bounds = {
    //        northEast: { lat:north, lng: east },
    //        southWest: { lat: south, lng: west } };
    //
    //      this.props.updateFilter('bounds', bounds);






  }

//
// componentWillReceiveProps(){
//   debugger;
//   // this.setState({lat: this.props.coords.lat, lng: this.props.coords.lng});
//   // //  this.map.setCenter({lat: this.props.coords.lat, lng: this.props.coords.lng});
// }

  componentDidUpdate(prevProps){
    const map = this.refs.map;
    let options = {
     center: {lat: this.props.coords.lat, lng: this.props.coords.lng},
     zoom: 13
   };

  //  if (this.props.coords.once === true && count === 0){
  //    this.map.setCenter({lat: this.props.coords.lat, lng: this.props.coords.lng});
  //    count++;
  //  } else {
  //    count = 0;
  //  }
      // debugger;
      // if(this.moved === false) {
      //   this.map.setCenter({lat: this.props.coords.lat, lng: this.props.coords.lng});//this.map.setCenter({lat: this.props.coords.lat, lng: this.props.coords.lng});
      //   this.moved = false;
      // } else{
      //   this.moved = false;
      // }
    // var input = document.getElementById('pac-input');
    // var searchBox = new google.maps.places.SearchBox(input);
    // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // this.map = new google.maps.Map(map, options);

    //
    if(this.props.coords !== prevProps.coords) {
      this.map.setCenter({lat: this.props.coords.lat, lng: this.props.coords.lng});
    }

    // if(this.props.singleFuton){
      // this.props.requestFuton(this.props.futonId);
    // } else {
      this._registerListeners();
      this.MarkerManager.updateMarkers(this.props.futons);
    // }
    // this.MarkerManager = new MarkerManager(this.map, this._handleMarkerClick.bind(this));



    //
    // this.MarkerManager.updateMarkers(this.props.futons);
    if (this.defaultProps.coords.lat != this.props.coords.lat && this.defaultProps.coords.lng != this.props.coords.lng) {
      this.defaultProps = this.props
    }







  }

  // fixMyPageOnce(){
  //   debugger;
  //   const { north, south, east, west } = this.map.getBounds().toJSON();
  //   const bounds = {
  //     northEast: { lat:north, lng: east },
  //     southWest: { lat: south, lng: west } };
  //     this.count = this.count + 1;
  //     this.props.updateFilter('bounds', bounds);
  //   }



  _registerListeners() {
    // const { north, south, east, west } = this.map.getBounds().toJSON();
    // const bounds = {
    //   northEast: { lat:north, lng: east },
    //   southWest: { lat: south, lng: west } };
    // this.props.updateFilter('bounds', bounds);
 debugger;
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat:north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateFilter('bounds', bounds);
      this.moved = true;
    });
    // debugger;
    // const { north, south, east, west } = this.map.getBounds().toJSON();
    // const bounds = {
    //   northEast: { lat:north, lng: east },
    //   southWest: { lat: south, lng: west } };
    // this.props.updateFilter('bounds', bounds);
    // google.maps.event.addListener(this.map, 'click', event => {
    //   const coords = _getCoordsObj(event.latLng);
    //   this._handleClick(coords);
    // });
  }

  _handleMarkerClick(futon){
    this.props.router.push("futons/" + futon.id );
  }

  // _handleClick(coords) {
  //   this.props.router.push({
  //     pathname: "futons/new",
  //     query: coords
  //   });
  // }





  render() {
    // if(this.map !== undefined){
    //   this.map.setCenter({lat: this.props.coords.lat, lng: this.props.coords.lng});
    // }
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
