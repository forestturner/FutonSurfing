import React from 'react';
import FutonIndexItem from './futon_index_item';
import { Scrollbars } from 'react-custom-scrollbars';

const FutonIndex = function(props) {
  const futons = props.futons;
  const futonKeys = Object.keys(futons);
  return (
    <div className="index">
      {
        futonKeys.map( key => (
        <FutonIndexItem futon={futons[key]} key={futons[key].id} />
        ))
      }
    </div>
  );
};

export default FutonIndex;
