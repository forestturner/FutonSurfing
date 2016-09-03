import React from 'react';
import UserIndexItem from './user_index_item';

const UserIndex = function(props) {
  const users = props.users;
  const userKeys = Object.keys(users);
  return(
    <div>
      <h1>Users: </h1>
      {
        userKeys.map( key => (
          <UserIndexItem user={users[key]} key ={key} />
        ))
      }
    </div>
  );
};
export default UserIndex;
