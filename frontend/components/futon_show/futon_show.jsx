import React from 'react';
import {Link} from 'react-router';

import FutonDetail from './futon_details';

// import FutonIndex from './futon_index';
import FutonMap from '../futon_map/futon_map';
// import FilterForm from './filter_form';
// import FutonMap from './futon_map/futon_map';
// import ReviewButton from './review_button';


class FutonShow extends React.Component {
  constructor(props) {
    super(props)
  }


 render () {

  let url = `/futons/${this.props.futonId}/request`;
  debugger;
  let coords = {lat: this.props.futon.lat, lng: this.props.futon.lng}
    return(
      <div className='single-futon-show'>
        <div className='single-futon-show'>
          <Link to="/profile"> Back to Dashboard </Link>
        </div>
        <div>
          <FutonMap futons={this.props.futons} updateBounds={this.props.updateBounds}  coords={coords} updateFilter={this.props.updateFilter} singleFuton={true} />
        </div>
        <div className="futon-details">
          <FutonDetail futon={this.props.futon} />
        </div>
        <div className='requestFuton'>
          <Link to={url}> Request a booking! </Link>
        </div>
      </div>
    );
  }
}
export default FutonShow;

// if (currentUserFutonId != futon.id){
//   }
//   else {
//     return(
//       <div className='single-futon-show'>
//         <div className='single-futon-show'>
//           <Link to="/profile"> Back to Dashboard </Link>
//         </div>
//         <div className="futon-details">
//           <FutonDetail futon={futon} />
//         </div>
//       </div>
//     );
//   }
// };

{/* <FutonMap futons={futons} futonId={futonId} singleFuton={true} requestFuton={requestFuton}/> */}

{/* {children || <ReviewButton futonId={futon.id}/>} */}
