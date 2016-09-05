import React from 'react';
import FutonIndexItem from './futon_index_item';

const FutonIndex = function(props) {
  const futons = props.futons;
  const futonKeys = Object.keys(futons);
  return (
    <div>
      {
        futonKeys.map( key => (
        <li><FutonIndexItem futon={futons[key]} key={key} /></li>
        ))
      }
    </div>
  );
};

export default FutonIndex;
