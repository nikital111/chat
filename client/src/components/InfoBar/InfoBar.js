import React from 'react';
import onlineIcon from '../../img/onlineIcon.jpg'
import closeIcon from '../../img/closeIcon.jpg'

import './InfoBar.css';

 export const InfoBar = ({room}) => {
   return(  
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} alt="onlineIcon"/>
            <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer">
      <a href="/"><img className="closeIcon" src={closeIcon} alt="closeIcon"/></a>
        </div>
    </div>
   )
}