import React from 'react';
import {Link} from 'react-router';
import UserIndex from './user_index';

const UserShow = function({users}) {
  return(
    <div className='all-user-show'>
      <div className='all-user-show'>
        <Link to="/profile"> Back to Dashboard</Link>
      </div>
      <div className="user-details">
        <UserIndex users ={users}/>
      </div>
    </div>
  );
};
export default UserShow;
