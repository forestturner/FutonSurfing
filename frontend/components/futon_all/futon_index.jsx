import React from 'react';
import FutonIndexItem from './futon_index_item';

const FutonIndex = function(props) {
  const futons = props.futons;
  const futonKeys = Object.keys(futons);
  return (
<<<<<<< HEAD
    <div className="index">
      {
        futonKeys.map( key => (
        <div className="futon-index-item" key={futons[key].id} ><FutonIndexItem futon={futons[key]} key={futons[key].id} /></div>
=======
    <div>
      {
        futonKeys.map( key => (
        <li key={futons[key].id} ><FutonIndexItem futon={futons[key]} key={futons[key].id} /></li>
>>>>>>> e4941b82c680c0d74294ceb469ed7ba97c52008e
        ))
      }
    </div>
  );
};

export default FutonIndex;
