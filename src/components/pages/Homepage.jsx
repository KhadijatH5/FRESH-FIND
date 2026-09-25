import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../Hero/Hero';
import WhyShopLocal from '../home/WhyShopLocal';
import SeasonalProduce from '../home/SeasonalProduce';

export default function Homepage() {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchParams) => {
    console.log('Searching for:', searchParams);
    navigate('/markets');
  };

  const handleExploreClick = () => {
    navigate('/markets');
  };

  return (
    <div>
      <Hero 
        onSearchSubmit={handleSearchSubmit} 
        onExploreClick={handleExploreClick} 
      />
      <WhyShopLocal />
      <SeasonalProduce />
    </div>
  );
}