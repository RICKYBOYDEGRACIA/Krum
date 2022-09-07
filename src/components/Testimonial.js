import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';
import "../css/Sample.css";

function Sample() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

  return (
    <div className='Carousel'>
       <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <div className='testimonial-text'>
                <p>It really saves me time and effort. web design is 
                    exactly what our business has been lacking. Duis cursus, 
                    mi quis viverra ornare, eros dolor interdum nulla, ut 
                    commodo diam libero vitae erat. Aenean faucibus nibh et 
                    justo cursus id rutrum lorem imperdiet. Nunc ut sem risus 
                    tristique posuere.</p>
                <h3>WALTER WARD</h3>
              </div>
            </Carousel.Item>
      
            <Carousel.Item>
              <div className='testimonial-text'>
                <p>It really saves me time and effort. web design is exactly 
                   what our business has been lacking. Duis cursus, mi quis 
                   viverra ornare, eros dolor interdum nulla, ut commodo diam 
                   libero vitae erat. Aenean faucibus nibh et justo cursus id 
                   rutrum lorem imperdiet. Nunc ut sem risus tristique posuere.</p>
                <h3>RICKY BOY</h3>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className='testimonial-text'>
                <p>It really saves me time and effort. web design is 
                    exactly what our business has been lacking. Duis cursus, 
                    mi quis viverra ornare, eros dolor interdum nulla, ut 
                    commodo diam libero vitae erat. Aenean faucibus nibh et 
                    justo cursus id rutrum lorem imperdiet. Nunc ut sem risus 
                    tristique posuere.</p>
                <h3>DONALD SIMPSON</h3>
              </div>
            </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Sample;