import React from 'react';
import {Link} from 'react-router';

import FutonIndex from './futon_index';
import FutonMap from '../futon_map/futon_map';
import FilterForm from './filter_form';
import { Scrollbars } from 'react-custom-scrollbars';
// import ReviewButton from './review_button';


class FutonShow extends React.Component {
  constructor(props) {
    super(props)
  }


 render () {

  return(
    <div className='container-fluid'>
    <div>
      <FutonMap futons={this.props.futons} updateBounds={this.props.updateBounds} coords={this.props.coords} updateFilter={this.props.updateFilter} singleFuton={false} />
    </div>
      <div className="futon-list-container">
      <Scrollbars>
        <FutonIndex futons={this.props.futons}/>
        </Scrollbars>
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
