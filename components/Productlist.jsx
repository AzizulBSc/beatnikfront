import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from '../styles/Product.module.css';
import Product from './Product';

export default function Productlist() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  
// api call for product
  async function getData() {
    var result = await fetch(`${process.env.BACKEND_URL}/api/product`);
    var result = await result.json();
    setData(result);
  }
  const router = useRouter();


  return (
    <>
      <div className={styles.heading}>Products</div>
      <div className={styles.container}>
        {data.map((product) => (
         <Product key={product.id} product={product} ></Product>
        ))}
      </div>
    </>
  )
}
