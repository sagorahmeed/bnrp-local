// 'use client';

// import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
// import Image from "next/image";
// import galleryImg from '@/app/data/galleryImage.json'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";



// export default function GallerySlider() {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     setIsLoaded(true);
//   }, []);

//   const settings = {
//     centerMode: true,
//     centerPadding: "100px",
//     slidesToShow: 1,
//     infinite: true,
//     speed: 500,
//     focusOnSelect: true,
//     dots: false,
//     arrows: true,
//     responsive: [
//       {
//         breakpoint: 767,
//         settings: {
//           centerPadding: "30px",
//         },
//       },
//     ],
//   };
  

//   return (
//     <div
//       className={`slider-wrapper ${isLoaded ? "loaded" : ""}`}
//       style={{ overflow: "hidden" }}
//     >
//       <Slider {...settings}>
//         {galleryImg.map((img) => (
//           <div key={img.id} className="slide">
//             <Image priority
//               src={img.img}
//               alt="Gallery Image"
//               width={1920}
//               height={1080}
//               className="gallery-img"
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }


'use client';

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import galleryImg from '@/app/data/galleryImage.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface GalleryImageType {
  id: number;
  img: string;
}

export default function GallerySlider() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const settings: import("react-slick").Settings = {
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    focusOnSelect: true,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          centerPadding: "30px",
        },
      },
    ],
  };

  return (
    <div
      className={`slider-wrapper ${isLoaded ? "loaded" : ""}`}
      style={{ overflow: "hidden" }}
    >
      <Slider {...settings}>
        {(galleryImg as GalleryImageType[]).map((img) => (
          <div key={img.id} className="slide">
            <Image
              priority
              src={img.img}
              alt="Gallery Image"
              width={1920}
              height={1080}
              className="gallery-img"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
