import React from 'react';
import FutonIndexItem from './futon_index_item';

const FutonIndex = function(props) {
  const futons = props.futons;
  const futonKeys = Object.keys(futons);
  return (
    <div>
      {
        futonKeys.map( key => (
        <li key={futons[key].id} ><FutonIndexItem futon={futons[key]} key={futons[key].id} /></li>
        ))
      }
    </div>
  );
};

export default FutonIndex;
