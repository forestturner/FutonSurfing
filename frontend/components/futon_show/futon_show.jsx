import React from 'react';
import {Link} from 'react-router';

import FutonDetail from './futon_details';
// import FutonMap from './futon_map/futon_map';
// import ReviewButton from './review_button';


const FutonShow = function({ currentUserId, requestFuton, children, futon, futonId, currentUserFutonId}) {
  let url = `/futons/${futonId}/request`;
  if (currentUserFutonId != futon.id){
    return(
      <div className='single-futon-show'>
        <div className='single-futon-show'>
          <Link to="/profile"> Back to Dashboard </Link>
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
  else {
    return(
      <div className='single-futon-show'>
        <div className='single-futon-show'>
          <Link to="/profile"> Back to Dashboard </Link>
        </div>
        <div className="futon-details">
          <FutonDetail futon={futon} />
        </div>
      </div>
    );
  }
};
export default FutonShow;


{/* <FutonMap futons={futons} futonId={futonId} singleFuton={true} requestFuton={requestFuton}/> */}

{/* {children || <ReviewButton futonId={futon.id}/>} */}
