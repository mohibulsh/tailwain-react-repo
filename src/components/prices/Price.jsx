import React, { useEffect, useState } from 'react';
import Pricecart from '../priceCart/Pricecart';

const Price = () => {

    const [price , setprice] =useState([]);
    useEffect(()=>{
        fetch ('price.json')
        .then (res => res.json())
        .then (data => setprice(data))
    },[])

    return (
        <div>
          <div className='grid md:grid-cols-3 gap-3 p-4'>
          {
                price.map(p=><Pricecart p={p}
                    key={p.id}
                ></Pricecart>)
            }
          </div>
        </div>
    );
};

export default Price;