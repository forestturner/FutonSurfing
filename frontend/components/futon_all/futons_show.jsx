import React from 'react';
import {Link} from 'react-router';

import FutonIndex from './futon_index';
import FutonMap from '../futon_map/futon_map';
// import ReviewButton from './review_button';


const FutonShow = function({ futons, updateFilter, height, width }) {
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
      <div>
      <input id="pac-input" className="controls" type="text" placeholder="Search Box"></input>
        <FutonMap futons={futons} updateFilter={updateFilter} singleFuton={false} height={height} width={width}/>
      </div>
    </div>
  );
};
export default FutonShow;




{/* <FilterForm updateFilter={updateFilter} city={city}/> */}

{/* <div className="futon-details">
<FutonIndex futons={futons}/>
</div> */}
