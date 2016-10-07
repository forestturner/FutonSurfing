import React from 'react';
import {Link} from 'react-router';

import FutonIndex from './futon_index';
import FutonMap from '../futon_map/futon_map';
import FilterForm from './filter_form';
// import ReviewButton from './review_button';


class FutonShow extends React.Component {
  constructor(props) {
    super(props)
  }

<<<<<<< HEAD

 render () {

  return(
    <div className='container-fluid'>
    <div>
      <FutonMap futons={this.props.futons} updateBounds={this.props.updateBounds} coords={this.props.coords} updateFilter={this.props.updateFilter} singleFuton={false} />
    </div>
      <div className="futon-list-container">
        <FutonIndex futons={this.props.futons}/>
      </div>

    </div>
  );



  }
=======
 render () {
  return(
    <div className='container-fluid'>
    <div>
    <FutonMap futons={this.props.futons} coords={this.props.coords} updateFilter={this.props.updateFilter} singleFuton={false} height={this.props.height} width={this.props.width}/>
    </div>
      <ul>
        <FutonIndex futons={this.props.futons}/>
      </ul>

    </div>
  );
}
>>>>>>> e4941b82c680c0d74294ceb469ed7ba97c52008e
}
export default FutonShow;




{/* <FilterForm updateFilter={updateFilter} city={city}/> */}

{/* <div className="futon-details">
<FutonIndex futons={futons}/>
</div> */}
