
import React from "react";
import comp from '../styles/Compare.module.css';


export default function Comprod({ comprod, setProduct, setIsShown, setInterest }) {
  function showModal(emiproduct) {
    setProduct(emiproduct);
    const { Modal } = require("bootstrap");
    const myModal = new Modal("#exampleModal");
    myModal.show();
    setIsShown(false);
    setInterest([]);
  }
  return (
    <>
      <div key={comprod.id} className={comp.card}>
        <div className={comp.prodimg}>
          <img width={600} height={200} src={`${process.env.BACKEND_URL}/comprod.image`} alt={comprod.name} />
        </div>
        <div className={comp.details}>
          <p>
            Name:{comprod.name}<br />
            Price: {comprod.price}
          </p>
        </div>
        <div className={comp.compare} >
          <button type="button" onClick={() => showModal(comprod)}>EMI</button>
          <button type="button" className="btn" >Buy</button>
        </div>
      </div>
    </>
  )
}
