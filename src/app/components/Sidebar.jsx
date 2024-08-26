import React from 'react';

const Sidebar = () => {
    return (
        <div className="bg-white p-4">
            <div className="bg-white p-3 mb-4 rounded-lg shadow-sm">
                <div className="flex items-center justify-center space-x-4 mb-2">
                    <svg className="w-12 h-12 text-cyan-400 transform rotate-45 scale-x-75" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                    </svg>
                    <span className="font-bold text-3xl">Blüten</span>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm">
                <h2 className="font-bold text-lg mb-4 bg-blue-100 text-center tracking-wide">Filter</h2>

                <div className="mb-6">
                    <h3 className="font-semibold mb-2 text-center">Preis</h3>
                    <div className="h-2 bg-blue-200 rounded-full mb-6"></div>
                    <div className="flex items-center justify-between mt-2 mx-4">
                        <span className='bg-gray-200 px-8 rounded-full'>5€</span>
                        <span>-</span>
                        <span className='bg-gray-200 px-6 rounded-full'>10€</span>
                    </div>
                    <hr className='my-5' />
                </div>

                <div className="mb-6">
                    <h3 className="font-semibold mb-2 flex items-center justify-center relative">
                        <span className="absolute left-1/2 transform -translate-x-1/2">Hersteller</span>
                        <svg className="w-4 h-4 absolute right-0 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </h3>
                    <div className="space-y-2 my-6">
                        {['ADREXpharma', 'Aurora', 'Avexia', 'Bedrocan', 'Cannamedical'].map((brand, index) => (
                            <label key={index} className="flex items-center">
                                <input type="checkbox" className="form-checkbox text-blue-500" defaultChecked={index >= 2} />
                                <span className="ml-2">{brand}</span>
                            </label>
                        ))}
                    </div>
                </div>
                <a
                    href="#"
                    className="bg-white flex justify-center text-primary px-6 py-2 rounded-[15px_0_15px] border-1 border-primary outline outline-2 outline-lime-300"
                >
                    mehr anzeigen
                </a>
                <hr className='my-6 w-60' />

                <div className="mb-6 mt-10">
                    <h3 className="font-semibold mb-2 text-center">THC Gehalt</h3>
                    <div className="h-2 bg-blue-200 rounded-full mb-6"></div>
                    <div className="flex items-center justify-between mb-2">
                        <span className='bg-gray-200 px-9 rounded-full'>11%</span>
                        <span>-</span>
                        <span className='bg-gray-200 px-9 rounded-full'>18%</span>
                    </div>
                </div>

                <div className="mb-6">
                    <h3 className="font-semibold mb-2 text-center">CBD Gehalt</h3>
                    <div className="h-2 bg-blue-200 rounded-full mb-6"></div>
                    <div className="flex items-center justify-between mb-2">
                        <span className='bg-gray-200 px-9 rounded-full'>1%</span>
                        <span>-</span>
                        <span className='bg-gray-200 px-9 rounded-full'>5%</span>
                    </div>
                </div>
                <hr className='mb-6' />

                <div className="mb-6">
                    <h3 className="font-semibold mb-4 text-center">Genetik</h3>
                    <div className="flex space-x-2 items-center justify-center">
                        {['Indica', 'Sativa', 'Hybrid'].map((type, index) => (
                            <button key={index} className={`px-4 py-1 rounded-md text-sm ${index === 0 ? 'bg-teal-500 text-white' : 'bg-teal-200 text-gray-700'}`}>
                                {type}
                            </button>
                        ))}
                    </div>
                </div>
                <hr className='mb-6' />

                <div className="mb-6">
                    <h3 className="font-semibold mb-4 text-center">Bestrahlung</h3>
                    <div className="flex space-x-2 justify-center items-center">
                        {['bestrahlt', 'nicht bestrahlt'].map((type, index) => (
                            <button key={index} className={`px-5 py-1 rounded-md text-sm ${index === 0 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
                                {type}
                            </button>
                        ))}
                    </div>
                </div>
                <hr className='mb-6' />

                <div>
                    <h3 className="font-semibold mb-2 flex items-center justify-center relative" style={{ marginTop: "40px" }}>
                        <span className="absolute left-1/2 transform -translate-x-1/2">Terpiene</span>
                        <svg className="w-4 h-4 absolute right-0 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </h3>
                </div>
                <hr className='my-10' />
                <div className="mb-6 flex justify-center">
                    <a href="#" className='text-blue-400 mx-1'>x</a>
                    <span className='font-lightbold'>alle Filter zurücksetzen</span>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
