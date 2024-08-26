import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1A8D91] text-white py-4 px-6 rounded-t-[25px]">
      <div className="container mx-auto flex flex-col md:flex-row flex-wrap justify-between items-center text-sm max-w-screen-lg w-full">

        {/* Left section */}
        <nav className="w-full md:w-auto mb-4 md:mb-0">
          <ul className="flex flex-col space-y-1 text-center md:text-left">
            <li><a href="#" className="hover:underline">AGB</a></li>
            <li><a href="#" className="hover:underline">Impressum</a></li>
            <li><a href="#" className="hover:underline">Datenschutz</a></li>
          </ul>
        </nav>

        {/* Middle section */}
        <div className="w-full md:w-auto mb-4 md:mb-0 text-center">
          <div className='space-x-5'>
            {['Rezept einlösen', 'Live Bestand'].map((text, index) => (
              <span key={index} className="inline-flex items-center">
                <svg className={`w-4 h-4 text-cyan-400 transform rotate-45 scale-x-75 flex-shrink-0 mr-2`} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
                <a href="#" className="hover:underline whitespace-nowrap">{text}</a>
              </span>
            ))}
          </div>
          <div className='space-x-5 md:mt-6'>
            {['Videosprechstunde', 'FAQs', 'Kontakt'].map((text, index) => (
              <span key={index} className="inline-flex items-center">
                <svg className={`w-4 h-4 text-cyan-400 transform rotate-45 scale-x-75 flex-shrink-0 mr-2`} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
                <a href="#" className="hover:underline whitespace-nowrap">{text}</a>
              </span>
            ))}
          </div>
        </div>

        {/* Right section */}
        <address className="w-full md:w-auto flex flex-wrap justify-between md:justify-end space-x-4 md:space-x-8 text-center md:text-left not-italic">
          <div className="w-full md:w-auto">
            <p className="font-bold">Standort</p>
            <p>Bergstraße 49 - 57</p>
            <p>69469 Weinheim</p>
            <p>(3 Glocken Quartier)</p>
          </div>
          <div className="w-full md:w-auto">
            <p className="font-bold">Telefon</p>
            <p><a href="tel:02235455250" className="hover:underline">0223 545 5250</a></p>
          </div>
          <div className="w-full md:w-auto">
            <p className="font-bold">Öffnungszeiten</p>
            <p>Mo-Fr: </p>
            <p>09:00 - 18:00 Uhr</p>
            <p>Sa: </p>
            <p>09:00 - 14:00 Uhr</p>
          </div>
        </address>

      </div>
    </footer>
  );
};

export default Footer;