import React from 'react';
import { Link, hashHistory } from 'react-router';

class FeaturedCityIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: this.props.lat,
      lng: this.props.lng,
      location: ""
    };
    this.cityClick =this.cityClick.bind(this);
  }

  cityClick(){
    this.state = {
      lat: this.props.lat,
      lng: this.props.lng,
      location: ""
    };
    this.props.updateCoords(this.state);
    hashHistory.push("/futons");
  }

  render(){
    const style = {
      backgroundImage: 'url('+this.props.img+')'
    }
    return(
      <div className='featured-cities' style={style} onClick={this.cityClick}>
        <div className='featured-cities-header'>
          <h2>{this.props.city}</h2>
        </div>
      </div>
    )
  }
}
export default FeaturedCityIndexItem;
