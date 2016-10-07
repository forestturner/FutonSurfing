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
<<<<<<< HEAD
      <div className="futon-image-container">

        <div className="index-item-image"
             onClick={this.handleClick}>
              <img src={futon.futon_img_url}/>
        </div>
        <div className="futon-info">
            <h4>* click here to book *  Description: {futon.description}</h4>
        </div>
=======
      <div className="futon-index-item"
           onClick={this.handleClick}>
          <div className="index-item-copy futon-image">
            <h4>* click here to book *  Description: {futon.description}</h4>
            <img src={futon.futon_img_url}/>
          </div>
>>>>>>> e4941b82c680c0d74294ceb469ed7ba97c52008e
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
