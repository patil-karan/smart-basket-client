import React from 'react';

const HomeSectionCard = ({ product }) => {
  return (

    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[17rem] mx-3 border hover:scale-105 transition-transform duration-300">

      <div className="h-[13rem] w-[12rem] flex justify-center items-center p-4">
        <img
          src={product.imageUrl}
          alt={product.title}
          style={{ width: '140px', height: 'auto' }}
          className="w-full h-full object-cover" // 
        />
      </div>


      <div className="p-4 flex flex-col items-center text-center">
        <h3 className="text-lg font-semibold text-gray-800">{product.brand}</h3>
        <p className="mt-2 text-sm text-gray-500 truncate">{product.title}</p>
      </div>

    </div>
  );
};

export default HomeSectionCard;
