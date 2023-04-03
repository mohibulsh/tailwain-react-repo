import React from 'react';

const Pricecart = ({p}) => {
    const {name , features,price} =p;
    return (
        <div className='bg-sky-400 text-center p-4 rounded'>
            <h3 className='text-5xl font-bold text-blue-700'>{price} 
            <span className='text-xl text-red-700'> /mon</span> </h3>
            <h1 className='text-2xl'>{name}</h1>
            <p>Features</p>
           {
            features.map((f,indx)=><p>{indx +1}: {f.name}</p>)
           }

           <button className='btn bg-yellow-300 text-xl font-bold w-full py-2 rounded
          sticky bottom-0 hover:bg-yellow-500 '>add the list</button>
        </div>
    );
};

export default Pricecart;