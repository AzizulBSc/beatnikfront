import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from '../styles/Compare.module.css';
import styles1 from '../styles/Modal.module.css';
import Comprod from "./Comprod";
export default function Compare() {

  
  const router = useRouter();

  //compare product data from local storage
  const [data, setData] = useState([]);
  useEffect(() => {
    compareProduct();
  }, []);

  async function compareProduct() {
    var dataObj;
    if (typeof (Storage) !== "undefined") {
      if (localStorage.getItem('dataObject') && localStorage.getItem('dataObject').length > 0) {
        dataObj = JSON.parse(localStorage.getItem('dataObject'));
        setData(dataObj);
        
  
      }
      else {
        router.push('/');
      }
    }
  }

  const [product, setProduct] = useState([]);

  // For Bank Data 
  const [banks, setBank] = useState([]);
  useEffect(() => {
    getBank();
    setIsShown(false);
  }, []);
  async function getBank() {
    var result = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/bank`);
    var banks = await result.json();
    setBank(banks);
  }


  
  // Bank Intersest
  const [interests, setInterest] = useState([]);
  const [interest, setInt] = useState([]);
  
  useEffect(() => {
    getInterest();
  }, []);
  async function getInterest() {
    var result = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/interest`);
    var data = await result.json();
    setInt(data);

  }
const handleBank = (id)=>{
  const dt = interest.filter(x=>x.bankid==id);
  setInterest(dt);
}




  //Emi Modal data Calculation

  const [Percentage, setPercentage] = useState(0);
  const [Installement, setInstallement] = useState(0);
  const [Period, setPeriod] = useState(0);

  function handleSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.target);
    const price = parseInt(data.get('price'));
    var paid = parseInt(data.get('paid'));
    const Interestinfo = data.get('duration');
    const arr = Interestinfo.split(',');
    const duration = parseInt(arr[0]);
    const percentage = parseFloat(arr[1]);
    const bankid = parseInt(data.get('bankid'));
   if(!(duration&&bankid)) {alert("Please Select All Data"); return;}
   if(!paid) paid = 0;
    var due = price-paid;
    let monthlypayment = due / duration;
    let interest = due * percentage / 100;
    monthlypayment += interest;

    // set EMI calculation data
    setPercentage(percentage);
    setInstallement(monthlypayment.toFixed(2));
    setPeriod(duration);

  }


  const [isShown, setIsShown] = useState(false);
  const handleClick = event => {
    setIsShown(true);
  };
  function clearCompare(){
    localStorage.clear();
    router.push('/');
  }



  return (
    <>
      <div className={styles.heading}>Products</div>
      <div className={styles.addcompare} >
        <button type="button" onClick={() => router.push('/')}>Add To Compare</button>
      </div>
      <div className={styles.addcompare} >
      <style jsx>{`
      button {
        background-color:;
      }
    `}</style>
        <button type="button" onClick={clearCompare}>Clear Comparion</button>
      </div>


      {/* Compare Product Container */}
      <div className={styles.container}>
        {data.map((product) => (
         <Comprod key = {product.id} comprod={product} setProduct={setProduct} setIsShown={
          setIsShown} setInterest={setInterest}></Comprod>
        ))}
      </div>


{/* EMI POP UP Modal */}
      
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-md">
          <div >

            <div className="modal-content">

              <div className={styles1.modal}>
                <div className="modal-body container-fluid">

                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-5 col-sm-5" id={styles1.imgdiv}>
                        <img className={styles1.img} height={100} width={200} src={"http://127.0.0.1:8000" + product.image} />
                      </div>
                      <div className="col-md-7 col-sm-7" >
                        <div className="row">{product.name}</div>
                        <div className="row"> Price: {parseInt(product.price).toFixed(2)}</div>
                        <input name="price" type="hidden" value={product.price} />
                      </div>
                    </div>





                    <div className="row">
                      <style jsx>{`
      .row{
        padding:5px 3px;
      }
.row select {
  background:#ffc000;
  border: solid 2px #997716;
  text-align: center;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}
.btn-calculate {
  border-radius: 4em;
  color: white;
  cursor: pointer;
  font-size: 18px;
        }
    `}</style>
                      <div className="row">
                        <div className="col-md-8 col-sm-8" >
                          <div id="bankselect" onClick={handleClick}>Select Bank</div>

                        </div>

                        <div className="col-md-4 col-sm-4" >
                        {isShown && (
                          <select className="col-md-12 col-sm-12" name="bankid" onChange={(e)=>handleBank(e.target.value)}>
                            <option value="0">Selec Bank</option>
                            {banks && banks !== undefined ?
                            banks.map((bank) => {
                              return(
                              <option key={bank.id}
                                value={bank.id}>{bank.code}</option>
                              )
                              }): "No Bank"
                            }
                          </select>
                          
                           )}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-8 col-sm-8">
                          Select Period
                        </div>
                        <div className="col-md-4 col-sm-4" >
                        <select className="col-md-12 col-sm-12" name="duration" id="duration">
                            <option value="0" selected>Select Duration</option>
                            {interests && interests !== undefined ?
                            interests.map((interest) => {
                              return(
                              <option key={interest.id}
                                value={interest.duration+","+interest.rate}>{interest.duration} months</option>
                              )
                              }): "No Duration"
                            }
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-8 col-sm-8">
                          Advance Payment
                        </div>
                        <div className="col-md-4 col-sm-4">
                          {/* <input type="number" value="" name="paid"/> */}
                          <input className="col-12" type="number" id="paid" name="paid"/>
                        </div>
                      </div>
                      <div className="row">
                        <div className="d-grid gap-2 col-4 mx-auto">
                          <button className="btn btn-secondary btn-sm btn-calculate" type="submit">Calculate</button>
                        </div>
                      </div>

                    </div>
                  </form>


                  <div className="row">
                    <div className="row">
                      <div className="col-md-8 col-sm-8">
                        Monthly Installement
                      </div>
                      <div className="col-md-4 col-sm-4" >{Installement}</div>
                    </div>
                    <div className="row">
                      <div className="col-md-8 col-sm-8">
                        Interest Rate
                      </div>
                      <div className="col-md-4 col-sm-4" >{Percentage} %</div>
                    </div><div className="row">
                      <div className="col-md-8 col-sm-8">
                        EMI Period
                      </div>
                      <div className="col-md-4 col-sm-4" >{Period} months</div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )}