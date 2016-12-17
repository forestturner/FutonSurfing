import React from 'react';
import {Link} from 'react-router';
// import ReviewShow from './review_show';

const FutonDetail = ({futon ,user}) => (
  <div>
    <ul className="futon-list">
      <img className="futonHost-img-show" src={futon.futon_img_details}/>
      <img className="image-nav-booking-show" src={user.profile_img_url}/>
      <li className="li-futon-show"> Host: {user.firstname} {user.lastname}</li>
      <li className="li-futon-show"> Languages: {user.languages}</li>
      <li className="li-futon-show"> About: {user.description}</li>
      <li className="li-futon-show"> Address: {futon.address} </li>
      <li className="li-futon-show"> Futon Description: {futon.description} </li>
    </ul>
  </div>
);
export default FutonDetail;
// #   create_table "futons", force: :cascade do |t|
// #     t.string   "address",       null: false
// #     t.float    "lat",           null: false
// #     t.float    "lng",           null: false
// #     t.text     "description",   null: false
// #     t.integer  "user_id",       null: false
// #     t.datetime "created_at",    null: false
// #     t.datetime "updated_at",    null: false
// #     t.string   "futon_img_url"
// #   end
