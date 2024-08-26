import React from 'react'

const SubHeader = () => {
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <nav className="w-full md:w-auto" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a href="#" className="text-[#62C3C6] hover:text-cyan-600 text-sm md:text-base">
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="w-4 h-4 md:w-6 md:h-6 text-[#62C3C6]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                <a href="#" className="ml-1 text-cyan-500 hover:text-cyan-600 md:ml-2 text-sm md:text-base">
                  Livebestand
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-4 h-4 md:w-6 md:h-6 text-cyan-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                <span className="ml-1 text-[#045A5C] md:ml-2 font-medium text-sm md:text-base">
                  Cannabis Blüten
                </span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto">
          <span className="text-gray-600 text-sm md:text-base">GKV mit Kostenübernahme?</span>
          <button
            aria-label="Preisoptionen"
            className="bg-white flex justify-center text-primary px-4 md:px-6 py-2 rounded-[15px_0_15px] border border-primary outline outline-2 outline-cyan-300 text-sm md:text-base w-full md:w-auto"
          >
            Preisoptionen
          </button>
        </div>
      </div>
    </div>
  )
}

export default SubHeader;
