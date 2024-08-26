import React from 'react';

const Main = () => {
    return (
        <div className="container mx-auto px-4 mt-4">
            <div className="flex flex-wrap items-center gap-2 justify-end p-2">
                <div className="w-full md:w-1/2 lg:w-1/3 bg-gray-100 rounded-full px-4 py-2">
                    <div className="flex items-center">
                        <input 
                            type="text" 
                            placeholder="Suchen" 
                            className="bg-transparent outline-none w-full text-gray-700" 
                            aria-label="Search"
                        />
                        <svg 
                            className="w-5 h-5 text-[#62C3C6] flex-shrink-0" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                            />
                        </svg>
                    </div>
                </div>

                <div className="bg-[#62C3C64D] rounded-md px-4 py-2 flex items-center space-x-2 whitespace-nowrap">
                    <span className="text-[#365758]">Sortieren nach</span>
                    <svg 
                        className="w-4 h-4 text-gray-400 flex-shrink-0" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M19 9l-7 7-7-7" 
                        />
                    </svg>
                </div>

                <div className="bg-[#62C3C64D] rounded-md px-4 py-2 flex items-center space-x-2 whitespace-nowrap">
                    <span className="text-gray-700">Verfügbarkeit</span>
                    <div className="w-10 h-6 bg-[#62C3C6] rounded-full p-1 duration-300 ease-in-out flex-shrink-0">
                        <div className="bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out"></div>
                    </div>
                </div>

                <div className="bg-[#62C3C64D] rounded-md p-2 flex-shrink-0">
                    <svg 
                        className="w-6 h-6 text-gray-700" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M4 6h16M4 12h16M4 18h16" 
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Main;
