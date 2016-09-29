import React from 'react';
import FeaturedCityIndexItem from './featured_city_index_item.jsx';

const FeaturedCityIndex = function({cities,updateCoords}) {
  // const cities = props.cities;
  const cityKeys = Object.keys(cities);

  return (
    <div>
    {
      cityKeys.map(city => (
       <FeaturedCityIndexItem key={city} city={city} img={cities[city][2]} lat={cities[city][0]} lng={cities[city][1]} updateCoords={updateCoords} />
     ))
    }
    </div>
  );
};

export default FeaturedCityIndex;
