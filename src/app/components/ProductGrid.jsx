import React from 'react';
import MiddleCard from './MiddleCard';
import LowerCard from './LowerCard';
import TopCard from './TopCard';

function ProductList({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3  gap-4 sm:gap-6 lg:gap-8">
      {/* First 3 products for TopCard */}
      <div className="p-2">
        <TopCard />
      </div>
      <div className="p-2">
        <TopCard />
      </div>
      <div className="p-2">
        <TopCard />
      </div>

      {/* Second 3 products for MiddleCard */}
      <div className="p-2">
        <MiddleCard />
      </div>
      <div className="p-2">
        <MiddleCard />
      </div>
      <div className="p-2">
        <MiddleCard />
      </div>

      {/* Remaining products for LowerCard */}
      <div className="p-2">
        <LowerCard />
      </div>
      <div className="p-2">
        <LowerCard />
      </div>
      <div className="p-2">
        <LowerCard />
      </div>
    </div>
  );
}

export default ProductList;
