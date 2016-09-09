import React from 'react';

class Splash extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
         lat: this.props.coords.lat,
         lng: this.props.coords.lng,
         location: ""
       };

    this.search = this.search.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }


  componentDidMount() {
    let input = document.getElementById('nav-search-splash')
    let options = {types: ['(cities)']};
    this.autocomplete = new google.maps.places.Autocomplete(input, options);
    this.autocomplete.addListener('place_changed', this.search);
  }

  search() {
    let place = this.autocomplete.getPlace();
    this.setState({
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
      location: ""
    });
    this.props.updateCoords(this.state);
    hashHistory.push("/futons");
  }
  updateSearch(e) {
    this.setState({location: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    return(
    <div>
      <img src="http://res.cloudinary.com/dnuopy1ir/image/upload/v1472775241/have-fun-with-FutonSurfing-4be6460989531efdc476a47756fc0d12_clqp2i.jpg" alt=""></img>
      <form className="nav-search" onSubmit={this.handleSubmit} >
        <input type="text" id="nav-search-splash" placeholder="enter a city" value={this.state.location} onChange={this.updateSearch} />
    </form>
    </div>
  );
  }
}
export default Splash;
