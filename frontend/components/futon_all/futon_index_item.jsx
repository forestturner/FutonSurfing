import React from 'react';
import { hashHistory } from 'react-router';


class IndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const futonID = this.props.futon.id;
    hashHistory.push("futons/" + futonID );
  }

  render() {
    const futon = this.props.futon;
    return (
      <div className="futon-index-item"
           onClick={this.handleClick}>
        <div className="index-item-info">
          <span className="index-item-category">Description: </span>
          <span className="index-item-copy">
            {futon.description}
          </span>
        </div>
        <span clasaName="futon-img">

        <img src={futon.futon_img_url}/>
        </span>
      </div>
    );
  }
}

export default IndexItem;
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

{/* <span className="index-item-category">Rating: </span>
<span className="index-item-copy">
{futon.average_rating || "No reviews yet"}
</span>
<span className="index-item-category">Number of Likes: </span>
<span className="index-item-copy">
{/*TODO remove the  || 0 below*/}
{/*{futon.favorite_users.length || 0 }*/}
// </span> */}
