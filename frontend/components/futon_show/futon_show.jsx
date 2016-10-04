import React from 'react';
import {Link} from 'react-router';

import FutonDetail from './futon_details';

// import FutonIndex from './futon_index';
import FutonMap from '../futon_map/futon_map';
// import FilterForm from './filter_form';
// import FutonMap from './futon_map/futon_map';
// import ReviewButton from './review_button';


const FutonShow = function({ currentUserId, requestFuton, children, futon, futonId, currentUserFutonId,updateFilter, futons}) {
  let url = `/futons/${futonId}/request`;
  debugger;
  let coords = {lat: futon.lat, lng: futon.lng}
    return(
      <div className='single-futon-show'>
        <div className='single-futon-show'>
          <Link to="/profile"> Back to Dashboard </Link>
        </div>
        <div>
          <FutonMap futons={futons} coords={coords} updateFilter={updateFilter} singleFuton={true} />
        </div>
        <div className="futon-details">
          <FutonDetail futon={futon} />
        </div>
        <div className='requestFuton'>
          <Link to={url}> Request a booking! </Link>
        </div>
      </div>
    );
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
