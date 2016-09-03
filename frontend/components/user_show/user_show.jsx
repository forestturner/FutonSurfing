import React from 'react';
import {Link} from 'react-router';
import UserDetail from './user_details';

const UserShow = function({ currentUserId, requestUser,children, user}) {
  return(
    <div className='single-user-show'>
      <div className='single-user-show'>
        <Link to="/profile"> Back to Dashboard </Link>
      </div>
      <div className="user-details">
        <UserDetail user={user} />
      </div>
    </div>
  );
};
export default UserShow;
