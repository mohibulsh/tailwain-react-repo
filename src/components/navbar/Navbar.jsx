import React, { useState } from 'react';
import './navbar.css'
import Link from '../link/Link';
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'
const Navbar = () => {
    const [isopen,setisopen]=useState([false])
    const routes = [
        { id: 1, name: "home", path: "/home" },
        { id: 2, name: "about", path: "/about" },
        { id: 3, name: "contact", path: "/contact" },
        { id: 4, name: "blog", path: "/blog" },
        { id: 5, name: "login", path: "/login" },
      ];
    return (
        <div>
       <div onClick={()=>setisopen(!isopen)} className='md:hidden' >
        
        <span>
            {
                isopen===true? <Bars3Icon className="h-6 w-6 text-blue-500" />: <XMarkIcon className="h-6 w-6 text-blue-500" />
            }
        </span>
       
        </div>
           <div className='md:flex list-none gap-4'> 
           {
                routes.map(route=><Link key={route.id} route={route}></Link>)  
            }
           </div>
        </div>
    );
};

export default Navbar;