import React, { useEffect, useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from '../styles/Slider.module.css';
export default function Slider() {
  const [data, setData] = useState([]);
  useEffect( () => {
    getData();
  }, []);
  async function getData()
  {
    var result = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/slider`);
    var result = await result.json();
    setData(result);
  }
  
  return (
    <div>
    <Carousel  infiniteLoop autoPlay showThumbs={false} showArrows={false}>
    {data.map((item) => (
        <div key={item.id} className={styles.slider}>
            <img  className={styles.img} src = {`${process.env.NEXT_PUBLIC_BACKEND_URL}/item.image`} alt ="pics" />
             </div>
         ))} 
     </Carousel>
 </div>
  )
}
