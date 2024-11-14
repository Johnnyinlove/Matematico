import { useState, useEffect } from "react";
import './App.css'
import './index.css'

export default function Slider( ) {
   

  const images = ["https://cdn.pixabay.com/photo/2015/12/15/06/42/kids-1093758_1280.jpg",
  "https://cdn.pixabay.com/photo/2014/03/12/18/45/boys-286245_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/06/15/11/51/learn-2405206_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/11/08/05/10/students-1807505_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/01/10/04/19/college-student-7708894_1280.jpg"
  ];

      const [slideIndex, setSlideIndex] = useState(0);
      const [autoPlay, setAutoPlay] = useState(true);

      const nextSlide =() => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % images.length); // Cambia 3 por el número de imágenes en tu slider
      };
      
      const prevSlide = () => {
        setSlideIndex((prevIndex) =>
          prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
        );
      };

      useEffect(() => {
    let interval:any;

        if (autoPlay) {
           interval = setInterval(() => {
            nextSlide();
          }, 2500)
        }; // Cambia 2500 ms (3 segundos) al intervalo deseado
    
        return () => {
          clearInterval(interval);
        };
      }, [autoPlay]);
    
    
      // const toggleAutoPlay = () => {
      //   setAutoPlay(!autoPlay);
      // };
    
      const handleMouseEnter = () => {
        setAutoPlay(false);
      };
    
      const handleMouseLeave = () => {
        setAutoPlay(true);
      };

    


return (

    <>

<div    onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} id="carouselExample" className="carousel slide">

  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={images[slideIndex]} alt={`Imagen ${slideIndex + 1}`} className="d-block w-100 img-fluid img-responsive carousel-item-img  " />
    </div>
    <div className="carousel-caption d-none d-md-block">
        <h5 className="text-primary">EL aprendizaje es vital</h5>
        <p className="text-primary">La repetición es la madre de la enseñanza</p>
      </div>
     </div>
     <button   onClick={prevSlide} className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button         onClick={nextSlide} className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</>

);
} 
