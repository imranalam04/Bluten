import React from 'react';
import Image from 'next/image';

// Product data
const products = [
    {
        "id": 1,
        "image": "/medicine.png",
        "brand": "Canify",
        "thc": 18,
        "cbd": "<",
        "name": "Cannabis Flos 18/1 PT Mango",
        "type": "Kultivar",
        "subtype": "Mango",
        "price": 11.66,
        "inStock": true,
        "anonymous": false
    },
];

const LowerCard = () => {
    const product = products[0];
    const isOutOfStock = !product.inStock;

    return (
        <div className="max-w-sm mx-auto bg-white rounded-[20px_0_20px] overflow-hidden shadow-lg border-2 border-[#28E3E9] m-6">
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
            <hr className="border-2 border-[#28E3E9]" />
            <div className="bg-[#16b6bc2d] p-6">
                <h2 className="text-lg mr-40 lg:mr-52 md:mr-52 font-semibold px-2 mb-4 bg-[#16b6bc43] lg:px-4 md:px-4 lg:text-center md:text-center  py-1 rounded-md">{product.brand}</h2>

                <div className="flex space-x-3 mb-4">
                    <span className="bg-white py-2 rounded-md px-8 text-sm font-semibold text-[#116A6C]">THC {product.thc}%</span>
                    <span className="bg-[#62C3C6] text-white px-8 py-2 font-semibold rounded-md text-sm">CBD {product.cbd}1%</span>
                    <span className="text-3xl flex justify-center mt-2">
                        <div className="relative w-6 h-6">
                            <div className="absolute inset-0 border-4 border-cyan-400 rounded-full border-dashed"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                            </div>
                        </div>
                    </span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#116A6C]">{product.name}</h3>
                <div className="grid grid-cols-2  gap-40 md:gap-52 mb-6">
                    <div>
                        <p className="text-md text-[#116A6C] ">{product.type}</p>
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
                        <button className="bg-[#ECFEAA] rounded-[15px_0_15px] px-4 py-2 text-sm">
                            in den Warenkorb
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LowerCard;
