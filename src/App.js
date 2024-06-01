import React from 'react';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import ProductGallery from './Components/Products/ProductGallery';
import SwiperSection from './Components/Swiper/SwiperSection';


const App = () => {
  return (
    <div>
      <Navbar />
      {/* <SwiperSection /> */}
      <ProductGallery />
      <Footer />
    </div>
  );
};

export default App;
