import React from 'react';
import {Link} from 'react-router';

import FutonIndex from './futon_index';
// import FutonMap from './futon_map/futon_map';
// import ReviewButton from './review_button';


const FutonShow = function({ futons }) {
  return(
    <div className='container-fluid'>
      <div className='row-contect'>
        <div className="col-sm-3 sidenav">
          <Link to="/profile"> Back to Dashboard </Link>
        </div>
        <ul className="nav-pills nav-stacked">
          <FutonIndex futons={futons}/>
        </ul>
      </div>
    </div>
  );
};
export default FutonShow;





{/* <div className="futon-details">
<FutonIndex futons={futons}/>
</div> */}
