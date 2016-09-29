import React from 'react';
import { Link, hashHistory } from 'react-router';
import  FeaturedCityIndex  from  './featured_city_index';

class Splash extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: this.props.coords.lat,
      lng: this.props.coords.lng,
      location: ""
    };
    // this.cities = {
    //   'New York': [40.740533, -73.998207, 'http://res.cloudinary.com/dnuopy1ir/image/upload/v1474151226/new-york-city_weujjw.jpg'],
    //   'Paris': [48.855449, 2.341032, 'http://res.cloudinary.com/dnuopy1ir/image/upload/v1474151263/paris_xyb5ml.jpg'],
    //   // 'St. Louis': [38.627003, ‎-90.199402, 'http://res.cloudinary.com/dnuopy1ir/image/upload/v1474151401/St_Louis_hero_cro_k78mel.jpg'],
    //   'Seattle': [47.6062, 122.3321, 'http://res.cloudinary.com/dnuopy1ir/image/upload/v1474151395/seattle_dzxwgt.jpg'],
    //   'San Francisco': [37.759, -122.446, 'http://res.cloudinary.com/dnuopy1ir/image/upload/v1474151466/SanFrancisco_0_l783ph.jpg'],
    //   'Los Angeles': [34.052235, -118.243683, 'http://res.cloudinary.com/dnuopy1ir/image/upload/v1474151360/Los_Angeles_Skyline_telephoto_k5tp37.jpg'],
    //   'San Diego': [32.842674, -117.257767, 'http://res.cloudinary.com/dnuopy1ir/image/upload/v1474151228/san-diego_y9wdnb.jpg']
    // };
    this.search = this.search.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }


  componentDidMount() {
    //
    // let input = document.getElementById('nav-search-splash')
    // let options = {types: ['(cities)']};
    // this.autocomplete = new google.maps.places.Autocomplete(input, options);
    // this.autocomplete.addListener('place_changed', this.search);
  }

  // cityClick(cityName){
  //   this.setState({
  //     lat: this.cities[]
  //     lng: place.geometry.location.lng(),
  //     location: ""
  //   });
  //   this.props.updateCoords(this.state);
  //   hashHistory.push("/futons");
  // }


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
      <header className="Splash">
          <div className="title">
            <h1>Stay with Locals and Meet Travelers</h1>
            <Link to="/futons" className="btn btn-info join">Explore</Link>
          </div>
      </header>


        <div className='rootCities'>
          <FeaturedCityIndex cities={this.props.cities} updateCoords={this.props.updateCoords}/>
        </div>

    </div>
  );
  }
}
export default Splash;



//   return(
//   <div>
//     <div className="splash-image">
//
//     <img src="http://res.cloudinary.com/dnuopy1ir/image/upload/v1472775241/have-fun-with-FutonSurfing-4be6460989531efdc476a47756fc0d12_clqp2i.jpg" alt=""></img>
//     <form className="nav-search" onSubmit={this.handleSubmit} >
//         Search
//       <input type="text" id="nav-search-splash" placeholder="enter a city" value={this.state.location} onChange={this.updateSearch} />
//     </form>
//     </div>
//     <div className="city-buttons-containter">
//       <div className="city-image-button"></div>
//       <div className="city-image-button"></div>
//       <div className="city-image-button"></div>
//       <div className="city-image-button"></div>
//       <div className="city-image-button"></div>
//
//     </div>
//   </div>
// );
