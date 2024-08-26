import React from 'react';
import Image from 'next/image';

// Product data
const products = [
    {
        id: 1,
        image: "/medicine.png",
        brand: "Canify",
        thc: 25,
        cbd: "<",
        name: "Cannabis Flos 18/1 PT Ku.Pink Kush DAB Canify",
        type: "Kultivar",
        subtype: "Pink Kush",
        price: 11.66,
        inStock: true,
        anonymous: false
    },
];

const MiddleCard = () => {
    const product = products[0];
    // Splitting the name to break after "PT"
    const nameParts = product.name.split('PT ');
    const firstPart = nameParts[0];
    const secondPart = nameParts[1] || '';
    return (
        <div className="max-w-sm mx-auto bg-white rounded-[20px_0_20px] overflow-hidden shadow-lg m-6">
            <div className="p-6">
                <div className="flex justify-between mb-4">
                    <p className="text-[#116A6C] text-sm bg-green-100 rounded-full px-4 py-1">
                        {product.inStock ? '• sofort lieferbar' : '• nicht lieferbar'}
                    </p>
                    <p className="text-[#116A6C] text-sm bg-green-100 rounded-full px-4 py-1">
                        {product.inStock ? 'Neu' : '• nicht lieferbar'}
                    </p>
                </div>
                <div className="flex justify-center items-center h-48 my-6">
                    <Image
                        src={product.image}
                        alt={`Image of ${product.name}`}
                        width={150}
                        height={150}
                        className="object-cover h-48"
                        priority
                    />
                </div>
            </div>
            <div className="bg-[#16b6bc2d] p-6">
                <h2 className="text-lg font-semibold mr-40 lg:mr-52 md:mr-52 px-2 mb-4 bg-[#16b6bc43] lg:px-4 md:px-4 lg:text-center md:text-center  py-1 rounded-md">{product.brand}</h2>
                <div className="flex space-x-3 mb-4">
                    <span className="bg-white py-2 rounded-md px-8 text-[15px] text-[#116A6C] font-semibold">THC {product.thc}%</span>
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
                    <span className="block">{firstPart}PT</span>
                    <span className="block">{secondPart}</span>
                </h3>
                <div className="grid grid-cols-2 gap-20 md:gap-40 mb-6">
                    <div>
                        <p className="text-md text-[#116A6C]">{product.type}</p>
                        <p className="text-md text-[#116A6C]">Genetik</p>
                    </div>
                    <div>
                        <p className="text-md text-[rgb(17,106,108)]">{product.subtype}</p>
                        <p className="text-md text-center sm:text-center md:text-center text-[#116A6C]">Hybrid</p>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-2xl md:text-3xl font-bold text-[#62C3C6]">€ <span className="text-[#116A6C]">{product.price.toFixed(2)}</span> <sup className="text-[#116A6C]">1</sup></p>
                        <p className="text-sm">pro Gramm</p>
                    </div>
                    {product.inStock ? (
                        <button className="bg-[#ECFEAA] text-[#116A6C] rounded-[15px_0_15px] px-4 py-2 text-sm">
                            in den Warenkorb
                        </button>
                    ) : (
                        <span className="text-red-500 text-sm">Nicht verfügbar</span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MiddleCard;
