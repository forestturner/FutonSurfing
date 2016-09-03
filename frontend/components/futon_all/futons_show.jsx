import React from 'react';
import {Link} from 'react-router';

import FutonIndex from './futon_index';
// import FutonMap from './futon_map/futon_map';
// import ReviewButton from './review_button';


const FutonShow = function({ futons }) {
  return(
    <div className='all-futon-show'>
      <div className='all-futon-show'>
        <Link to="/profile"> Back to Dashboard </Link>
      </div>
      <div className="futon-details">
        <FutonIndex futons={futons}/>
      </div>
    </div>
  );
};
export default FutonShow;
