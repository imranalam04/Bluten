"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

function TopCard() {
  // Product data
  const product = {
    id: 1,
    image: "/medicine.png",
    brand: "Canify",
    thc: 18,
    cbd: "<",
    name: "Cannabis Flos 18/1 PT Mango",
    type: "Kultivar",
    subtype: "Mango",
    price: 11.66,
    inStock: true,
    anonymous: false
  };

  const isOutOfStock = !product.inStock;

  return (
    <motion.div
      className="max-w-sm mx-auto bg-white rounded-[20px_0_20px] overflow-hidden shadow-lg border-2 border-[#28E3E9] m-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6">
        <p
          className={`text-sm rounded-full w-[37%] tracking-wider text-center ${isOutOfStock ? 'text-red-500 bg-red-100' : 'text-[#A10C0C] bg-[#A10C0C0D]'}`}
          aria-label={isOutOfStock ? "Out of stock" : "In stock"}
        >
          • {isOutOfStock ? "nicht lieferbar" : "lieferbar"}
        </p>
        <div className="flex justify-center my-6">
          <Image
            src={product.image}
            alt={product.name}
            width={150}
            height={150}
            className="h-48 object-cover"
            priority
          />
        </div>
      </div>
      <hr className="border-2 border-cyan-300" />
      <div className="bg-[#16b6bc2d] p-6">
        <h2 className="text-lg mr-40 lg:mr-52 md:mr-49 font-semibold mb-4 bg-[#16b6bc43] px-2 lg:px-4 md:px-4 lg:text-center md:text-center  md:mr-49 py-1 rounded-md">{product.brand}</h2>

        <div className="flex space-x-3 mb-4">
          <span className="bg-white py-2 rounded-md px-8 text-sm text-[#116A6C] font-semibold">THC {product.thc}%</span>
          <span className="bg-[#62C3C6] text-white px-9 py-2 rounded-md text-sm font-semibold">CBD {product.cbd}1%</span>
          <span className="text-3xl flex justify-center mt-2">
            <div className="relative w-6 h-6">
              <div className="absolute inset-0 border-4 border-cyan-400 rounded-full border-dashed"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              </div>
            </div>
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-4 text-[#116A6C]">
          <span className="block">{product.name.split(' ').slice(0, -1).join(' ')}</span>
          <span className="block">{product.name.split(' ').slice(-1).join(' ')}</span>
        </h3>
        <div className="grid grid-cols-2 gap-40 md:gap-52 mb-6">
          <div>
            <p className="text-md text-[#116A6C]">{product.type}</p>
            <p className="text-md text-[#116A6C]">Genetik</p>
          </div>
          <div>
            <p className="text-md text-[#116A6C]">{product.subtype}</p>
            <p className="text-md text-[#116A6C]">Hybrid</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-2xl md:text-3xl font-bold text-[#62C3C6]">€ <span className="text-[#116A6C]">{product.price.toFixed(2)}</span> <sup className="text-[#116A6C]">1</sup></p>
            <p className="text-sm">pro Gramm</p>
          </div>
          {isOutOfStock ? (
            <span className="text-red-500 text-sm">Nicht verfügbar</span>
          ) : (
            <motion.button
              className="bg-[#ECFEAA] rounded-[15px_0_15px] px-4 py-2 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              in den Warenkorb
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default TopCard;
