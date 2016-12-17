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
    let divStyle = {
      color: "#8c8c8c",
      fontFamily: "Roboto, Arial, sans-serif",
      fontSize: "13px",
      lineHeight: "16px",
      cursor: "pointer",
      boxShadow: "0 1px rgba(0, 0, 0, 0.2)"
    }
    let imgStyle = {
      width: "80px",
      height: "92px",
      float: "right",
      padding: "10px"

    }
    let starStyle = {
    width:"80px",
    height: "16px",
    }
    let star_pics =["0",
     "http://res.cloudinary.com/dnuopy1ir/image/upload/c_scale,h_16,w_80/v1481847153/oneStar_gu9gv2.png",
     "http://res.cloudinary.com/dnuopy1ir/image/upload/c_scale,h_16,w_80/v1481847151/twoStar_oxvp99.png",
     "http://res.cloudinary.com/dnuopy1ir/image/upload/c_scale,h_16,w_80/v1481847151/threeStars_wtyrep.png",
     "http://res.cloudinary.com/dnuopy1ir/image/upload/c_scale,h_16,w_80/v1481847154/fourStar_dxq4fc.png",
     "http://res.cloudinary.com/dnuopy1ir/image/upload/c_scale,h_16,w_80/v1481847154/fiveStar_zpvina.png"
   ]
   let random = Math.random() * 10


    const futon = this.props.futon;
    return (
      <div className="futon-index-item" onClick={this.handleClick} style={divStyle}>

          <img style={imgStyle} src={futon.futon_img_url}/>
          <img style={starStyle} src={star_pics[futon.rating]}/>
            {futon.name}
            {futon.address}



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
