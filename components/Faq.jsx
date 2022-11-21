
import React, { useEffect, useState } from "react";
import styles from '../styles/Faq.module.css';
export default function Faq({faqs}) {
    
  const [data, setData] = useState([]);
  useEffect( () => {
    getData();
  }, []);
  async function getData()
  {
    var result = await fetch(`${process.env.BACKEND_URL}/api/faq`);
    var result = await result.json();
    setData(result);
  }
  return (
    <>
        <div className={styles.faq}>  
        <div>  
            <ol>
            <div><h4>FAQ</h4></div>
           
            {data.map((item) => (
                  <li key={item.id}>{item.description}</li>
                  ))}
            </ol>
            </div>
        </div>
    </>
  )
}