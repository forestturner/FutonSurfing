// const React = require('react');
// const hashHistory = require('react-router')
//
// class SearchBar extends React.Component{
//   constructor(){
//     this.state = {
//       text: 'Search by city...'
//     }
//   }
//   componentDidMount(){
//     let input = document.getElementById('nav-search')
//     let options = {types: ['(cities)']};
//     this.autocomplete = new google.maps.places.Autocomplete(input, options);
//     this.autocomplete.addListener('place_changed', this.search);
// }
// _handleSubmit() {
//
//   let place = this.autocomplete.getPlace();
//
//   this.setState({
//     lat: place.geometry.location.lat(),
//     lng: place.geometry.location.lng(),
//     location: ""
//   });
//   this.props.updateCoords(this.state);
//   hashHistory.push("/futons");
//
// }
//
//
//
// this.search = this.search.bind(this);
// this.updateSearch = this.updateSearch.bind(this);
