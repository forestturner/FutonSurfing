import React from 'react';
import FutonIndexItem from './futon_index_item';

const FutonIndex = function(props) {
  const futons = props.futons;
  const futonKeys = Object.keys(futons);
  return (
    <div>
      <h1>Futons: </h1>
      {
        futonKeys.map( key => (
          <FutonIndexItem futon={futons[key]} key={key} />
        ))
      }
    </div>
  );
};

export default FutonIndex;
