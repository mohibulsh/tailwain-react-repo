import React from 'react';
import './link.css'
const Link = (props) => {
    const {name,path}=props.route;
    
    return (
        <div>
           <li>
              <a href={path}>{name}</a>
           </li>
        </div>
    );
};

export default Link;