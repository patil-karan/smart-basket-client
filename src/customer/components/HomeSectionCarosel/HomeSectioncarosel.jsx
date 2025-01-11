import React, { useState, useRef } from 'react';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const HomeSectionCarousel = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4 }
  };

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const items = data.map((item, index) => (
    <div key={index} className="mx-4">
      <HomeSectionCard product={item} />
    </div>
  ));

  return (
    <div className="relative p-5">
      <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
      <AliceCarousel
        ref={carouselRef}
        items={items}
        responsive={responsive}
        disableButtonsControls
        disableDotsControls
        activeIndex={activeIndex}
        mouseTracking
        touchTracking
        onSlideChange={({ item }) => setActiveIndex(item)}
      />

      {activeIndex !== items.length - 4 && (
        <Button
          variant="contained"
          className="z-50"
          onClick={slideNext}
          sx={{
            position: 'absolute',
            top: '50%',
            right: '0',
            transform: 'translateX(50%) rotate(90deg)',
            bgcolor: 'white',
            color: 'black',
            zIndex: 10
          }}
          aria-label="next"
        >
          <KeyboardArrowRightIcon sx={{ transform: "rotate(-90deg)", color: "black" }} />
        </Button>
      )}

      <Button
        variant="contained"
        className="z-50"
        onClick={slidePrev}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '0',
          transform: 'translateX(-50%) rotate(90deg)',
          bgcolor: 'white',
          color: 'black',
          zIndex: 10
        }}
        aria-label="previous"
      >
        <KeyboardArrowLeftIcon sx={{ transform: "rotate(-90deg)", color: "black" }} />
      </Button>


    </div>
  );
};

export default HomeSectionCarousel;
