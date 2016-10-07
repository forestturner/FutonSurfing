import React from 'react';
import FutonIndexItem from './futon_index_item';

const FutonIndex = function(props) {
  const futons = props.futons;
  const futonKeys = Object.keys(futons);
  return (
    <div className="index">
      {
        futonKeys.map( key => (
        <div className="futon-index-item" key={futons[key].id} ><FutonIndexItem futon={futons[key]} key={futons[key].id} /></div>
        ))
      }
    </div>
  );
};

export default FutonIndex;
