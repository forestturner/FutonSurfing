import React from 'react';
import {hashHistory} from 'react-router';

class IndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

  }
  handleClick() {
    const userID = this.props.user.id;
    hashHistory.push("users/" + userID);
  }
  render() {
    const user = this.props.user;
    return(
      <div className="user-index-item" onClick={this.handleClick}>
        <div className= "user-index-item-info">
          <img src={user.profile_img_url}/>
          <span className ="user-index-item-category">Name: </span>
          <br/>
          <span className ="index-item-copy">
            {user.firstname +" "+ user.lastname}
          </span>
          <br/>
          <span className ="user-index-item-category">Username: </span>
          <br/>
          <span className ="index-item-copy">
            {user.username}
          </span>
          <br/>
          <span className ="user-index-item-category">email: </span>
          <br/>
          <span className ="index-item-copy">
            {user.email}
          </span>
          <br/>
        </div>
      </div>
    );
  }
}

export default IndexItem;
//
//
// create_table "users", force: :cascade do |t|
//   t.string   "firstname",       null: false
//   t.string   "lastname",        null: false
//   t.string   "password_digest", null: false
//   t.string   "session_token",   null: false
//   t.string   "email",           null: false
//   t.string   "profile_img_url"
//   t.datetime "created_at",      null: false
//   t.datetime "updated_at",      null: false
//   t.string   "username"
// end
