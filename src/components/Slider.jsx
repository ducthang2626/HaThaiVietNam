import React from "react";
import { Carousel } from "antd";
import { useRef, useEffect } from "react";

const images = [
  "/assets/images/j1.png",
  "/assets/images/j2.png",
  "/assets/images/j3.png",
  "/assets/images/j4.png",
  "/assets/images/j5.png",
];


const ImageSlider = () => {
    const carouselRef = useRef();
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (carouselRef.current) {
          carouselRef.current.next();
        }
      }, 3000); // 3 giây
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <Carousel
        ref={carouselRef}
        dots
        dotPosition="bottom"
        effect="scrollx"
        draggable
      >
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Slide ${index}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        ))}
      </Carousel>
    );
  };
  
  export default ImageSlider;
// const ImageSlider = () => {
//   return (
//     <Carousel autoplay autoplaySpeed={2000} dotPosition="bottom" effect="scrollx" infinite={true}>
//       {images.map((src, index) => (
//         <div key={index}>
//           <img src={src} alt={`Slide ${index}`} style={{ ...contentStyle, width: "100%", height: "100%" }}/>
//         </div>
//       ))}
//     </Carousel>
//   );
// };

// export default ImageSlider;
