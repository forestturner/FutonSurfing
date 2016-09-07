import React from 'react';
import {Link} from 'react-router';

import FutonIndex from './futon_index';
import FutonMap from '../futon_map/futon_map';
// import ReviewButton from './review_button';


class FutonShow extends React.Component {
  constructor(props) {
    super(props)
  }

 render () {
  return(
    <div className='container-fluid'>

    <div>
    <input id="pac-input" className="controls" type="text" placeholder="Search Box"></input>
    <FutonMap futons={this.props.futons} updateFilter={this.props.updateFilter} singleFuton={false} height={this.props.height} width={this.props.width}/>
    </div>
      <div className='row-contect'>
        <div className="col-sm-3 sidenav">
          <Link to="/profile"> Back to Dashboard </Link>
        </div>
        <ul className="nav-pills nav-stacked">
          <FutonIndex futons={this.props.futons}/>
        </ul>
      </div>
    </div>
  );
}
}
export default FutonShow;




{/* <FilterForm updateFilter={updateFilter} city={city}/> */}

{/* <div className="futon-details">
<FutonIndex futons={futons}/>
</div> */}
