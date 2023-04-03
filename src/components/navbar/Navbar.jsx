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
        <nav className='bg-sky-400'>
       <div onClick={()=>setisopen(!isopen)} className='md:hidden' >
        
        <span>
            {
                isopen===true?<XMarkIcon className="h-6 w-6 text-blue-500 text-white pl-2" /> : <Bars3Icon className="h-6 w-6 text-blue-500 text-white pl-2" />
            }
        </span>
       
        </div>
           <div className={`md:flex md:static absolute list-none duration-500 gap-4 
           bg-sky-300 py-2 px-4 ${isopen?'top-6':'-top-36'}`}> 
           {
                routes.map(route=><Link key={route.id} route={route}></Link>)  
            }
           </div>
        </nav>
    );
};

export default Navbar;