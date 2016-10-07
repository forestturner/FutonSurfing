import React from 'react';
import {Link} from 'react-router';
// import ReviewShow from './review_show';

<<<<<<< HEAD
const FutonDetail = ({futon ,user}) => (
  <div>
    <ul className="futon-list">
      <img className="futonHost-img-show " src={futon.futon_img_url}/>
      <img className="image-nav-booking-show" src={user.profile_img_url}/>
      <li className="li-futon-show"> Host: {user.firstname} {user.lastname}</li>
      <li className="li-futon-show"> Languages: {user.languages}</li>
      <li className="li-futon-show"> About: {user.description}</li>
      <li className="li-futon-show"> Address: {futon.address} </li>
      <li className="li-futon-show">  Futon Description: {futon.description} </li>
=======
const FutonDetail = ({futon}) => (
  <div>
    <ul className="futon-list">
      <img className="futon_show" src={futon.futon_img_url}/>
      <li> Address: {futon.address} </li>
      <li> Description: {futon.description} </li>
>>>>>>> e4941b82c680c0d74294ceb469ed7ba97c52008e
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
