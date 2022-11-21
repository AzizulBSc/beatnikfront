import { useRouter } from "next/router";
import React from "react";
import styles from '../styles/Product.module.css';
export default function Product({ product }) {

  const router = useRouter();

  function compare(product1) {

    var dataObject = [];
    var dataObj;
    if (typeof (Storage) !== "undefined") {
      if (localStorage.getItem('dataObject') && localStorage.getItem('dataObject').length > 0)
        dataObject = JSON.parse(localStorage.getItem('dataObject'));
      dataObj = {
        'id': product.id,
        'image': product.image,
        'name': product.name,
        'price': product.price
      };
      dataObject.push(dataObj);
      localStorage.setItem('dataObject', JSON.stringify(dataObject));
    } else {
      alert("Error: Localstorage not supported");
    }

    router.push('/compare');
  }
  return (
    <>
      <div key={product.id} className={styles.card}>
        <div className={styles.prodimg}>
          <img width={400} height={200} src={"http://127.0.0.1:8000" + product.image} alt={product.name} />
        </div>
        <div className={styles.details}>
          <p>
            Name:{product.name}<br />
            Price: {product.price}
          </p>
        </div>
        <div className={styles.compare} >
          <button type="button" onClick={() => compare(product)}>
            Compare</button>
        </div>
      </div>
    </>
  )
}