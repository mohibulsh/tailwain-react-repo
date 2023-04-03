import React from 'react';
import './link.css'
const Link = (props) => {
    const {name,path}=props.route;
    
    return (
        <>
           <li>
              <a href={path}>{name}</a>
           </li>
        </>
    );
};

export default Link;