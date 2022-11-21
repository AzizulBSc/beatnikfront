(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[427],{8328:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/compare",function(){return __webpack_require__(2450)}])},2450:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Home}});var jsx_runtime=__webpack_require__(5893),style=__webpack_require__(1857),style_default=__webpack_require__.n(style),next_router=__webpack_require__(1163),react=__webpack_require__(7294),Compare_module=__webpack_require__(6974),Compare_module_default=__webpack_require__.n(Compare_module),Modal_module=__webpack_require__(8490),Modal_module_default=__webpack_require__.n(Modal_module);function Comprod(param){let{comprod,setProduct,setIsShown,setInterest}=param;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("div",{className:Compare_module_default().card,children:[(0,jsx_runtime.jsx)("div",{className:Compare_module_default().prodimg,children:(0,jsx_runtime.jsx)("img",{width:600,height:200,src:"https://beatnikback.herokuapp.com"+comprod.image,alt:comprod.name})}),(0,jsx_runtime.jsx)("div",{className:Compare_module_default().details,children:(0,jsx_runtime.jsxs)("p",{children:["Name:",comprod.name,(0,jsx_runtime.jsx)("br",{}),"Price: ",comprod.price]})}),(0,jsx_runtime.jsxs)("div",{className:Compare_module_default().compare,children:[(0,jsx_runtime.jsx)("button",{type:"button",onClick:()=>(function(emiproduct){setProduct(emiproduct);let{Modal}=__webpack_require__(8877),myModal=new Modal("#exampleModal");myModal.show(),setIsShown(!1),setInterest([])})(comprod),children:"EMI"}),(0,jsx_runtime.jsx)("button",{type:"button",className:"btn",children:"Buy"})]})]},comprod.id)})}function Compare(){let router=(0,next_router.useRouter)(),[data,setData]=(0,react.useState)([]);async function compareProduct(){"undefined"!=typeof Storage&&(localStorage.getItem("dataObject")&&localStorage.getItem("dataObject").length>0?setData(JSON.parse(localStorage.getItem("dataObject"))):router.push("/"))}(0,react.useEffect)(()=>{compareProduct()},[]);let[product,setProduct]=(0,react.useState)([]),[banks,setBank]=(0,react.useState)([]);async function getBank(){setBank(await (await fetch("".concat("https://beatnikback.herokuapp.com","/api/bank"))).json())}(0,react.useEffect)(()=>{getBank(),setIsShown(!1)},[]);let[interests,setInterest]=(0,react.useState)([]),[interest,setInt]=(0,react.useState)([]);async function getInterest(){setInt(await (await fetch("".concat("https://beatnikback.herokuapp.com","/api/interest"))).json())}(0,react.useEffect)(()=>{getInterest()},[]);let handleBank=id=>{let dt=interest.filter(x=>x.bankid==id);setInterest(dt)},[Percentage,setPercentage]=(0,react.useState)(0),[Installement,setInstallement]=(0,react.useState)(0),[Period,setPeriod]=(0,react.useState)(0),[isShown,setIsShown]=(0,react.useState)(!1),handleClick=event=>{setIsShown(!0)};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:Compare_module_default().heading,children:"Products"}),(0,jsx_runtime.jsx)("div",{className:Compare_module_default().addcompare,children:(0,jsx_runtime.jsx)("button",{type:"button",onClick:()=>router.push("/"),children:"Add To Compare"})}),(0,jsx_runtime.jsxs)("div",{className:"jsx-b32a8f56d0836be "+(Compare_module_default().addcompare||""),children:[(0,jsx_runtime.jsx)(style_default(),{id:"b32a8f56d0836be",children:"button.jsx-b32a8f56d0836be{background-color:}"}),(0,jsx_runtime.jsx)("button",{type:"button",onClick:function(){localStorage.clear(),router.push("/")},className:"jsx-b32a8f56d0836be",children:"Clear Comparion"})]}),(0,jsx_runtime.jsx)("div",{className:Compare_module_default().container,children:data.map(product=>(0,jsx_runtime.jsx)(Comprod,{comprod:product,setProduct:setProduct,setIsShown:setIsShown,setInterest:setInterest},product.id))}),(0,jsx_runtime.jsx)("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:(0,jsx_runtime.jsx)("div",{className:"modal-dialog modal-md",children:(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("div",{className:"modal-content",children:(0,jsx_runtime.jsx)("div",{className:Modal_module_default().modal,children:(0,jsx_runtime.jsxs)("div",{className:"modal-body container-fluid",children:[(0,jsx_runtime.jsxs)("form",{onSubmit:function(e){e.preventDefault();let data=new FormData(e.target),price=parseInt(data.get("price"));var paid=parseInt(data.get("paid"));let Interestinfo=data.get("duration"),arr=Interestinfo.split(","),duration=parseInt(arr[0]),percentage=parseFloat(arr[1]),bankid=parseInt(data.get("bankid"));if(!(duration&&bankid)){alert("Please Select All Data");return}paid||(paid=0);var due=price-paid;let monthlypayment=due/duration;monthlypayment+=due*percentage/100,setPercentage(percentage),setInstallement(monthlypayment.toFixed(2)),setPeriod(duration)},children:[(0,jsx_runtime.jsxs)("div",{className:"row",children:[(0,jsx_runtime.jsx)("div",{className:"col-md-5 col-sm-5",id:Modal_module_default().imgdiv,children:(0,jsx_runtime.jsx)("img",{className:Modal_module_default().img,height:100,width:200,src:"https://beatnikback.herokuapp.com"+product.image})}),(0,jsx_runtime.jsxs)("div",{className:"col-md-7 col-sm-7",children:[(0,jsx_runtime.jsx)("div",{className:"row",children:product.name}),(0,jsx_runtime.jsxs)("div",{className:"row",children:[" Price: ",parseInt(product.price).toFixed(2)]}),(0,jsx_runtime.jsx)("input",{name:"price",type:"hidden",value:product.price})]})]}),(0,jsx_runtime.jsxs)("div",{className:"jsx-d6e094823c70936b row",children:[(0,jsx_runtime.jsx)(style_default(),{id:"d6e094823c70936b",children:".row.jsx-d6e094823c70936b{padding:5px 3px}.row.jsx-d6e094823c70936b select.jsx-d6e094823c70936b{background:#ffc000;border:solid 2px#997716;text-align:center;color:white;cursor:pointer;font-size:16px;font-weight:bold}.btn-calculate.jsx-d6e094823c70936b{-webkit-border-radius:4em;-moz-border-radius:4em;border-radius:4em;color:white;cursor:pointer;font-size:18px}"}),(0,jsx_runtime.jsxs)("div",{className:"jsx-d6e094823c70936b row",children:[(0,jsx_runtime.jsx)("div",{className:"jsx-d6e094823c70936b col-md-8 col-sm-8",children:(0,jsx_runtime.jsx)("div",{id:"bankselect",onClick:handleClick,className:"jsx-d6e094823c70936b",children:"Select Bank"})}),(0,jsx_runtime.jsx)("div",{className:"jsx-d6e094823c70936b col-md-4 col-sm-4",children:isShown&&(0,jsx_runtime.jsxs)("select",{name:"bankid",onChange:e=>handleBank(e.target.value),className:"jsx-d6e094823c70936b col-md-12 col-sm-12",children:[(0,jsx_runtime.jsx)("option",{value:"0",className:"jsx-d6e094823c70936b",children:"Selec Bank"}),banks&&void 0!==banks?banks.map(bank=>(0,jsx_runtime.jsx)("option",{value:bank.id,className:"jsx-d6e094823c70936b",children:bank.code},bank.id)):"No Bank"]})})]}),(0,jsx_runtime.jsxs)("div",{className:"jsx-d6e094823c70936b row",children:[(0,jsx_runtime.jsx)("div",{className:"jsx-d6e094823c70936b col-md-8 col-sm-8",children:"Select Period"}),(0,jsx_runtime.jsx)("div",{className:"jsx-d6e094823c70936b col-md-4 col-sm-4",children:(0,jsx_runtime.jsxs)("select",{name:"duration",id:"duration",className:"jsx-d6e094823c70936b col-md-12 col-sm-12",children:[(0,jsx_runtime.jsx)("option",{value:"0",selected:!0,className:"jsx-d6e094823c70936b",children:"Select Duration"}),interests&&void 0!==interests?interests.map(interest=>(0,jsx_runtime.jsxs)("option",{value:interest.duration+","+interest.rate,className:"jsx-d6e094823c70936b",children:[interest.duration," months"]},interest.id)):"No Duration"]})})]}),(0,jsx_runtime.jsxs)("div",{className:"jsx-d6e094823c70936b row",children:[(0,jsx_runtime.jsx)("div",{className:"jsx-d6e094823c70936b col-md-8 col-sm-8",children:"Advance Payment"}),(0,jsx_runtime.jsx)("div",{className:"jsx-d6e094823c70936b col-md-4 col-sm-4",children:(0,jsx_runtime.jsx)("input",{type:"number",id:"paid",name:"paid",className:"jsx-d6e094823c70936b col-12"})})]}),(0,jsx_runtime.jsx)("div",{className:"jsx-d6e094823c70936b row",children:(0,jsx_runtime.jsx)("div",{className:"jsx-d6e094823c70936b d-grid gap-2 col-4 mx-auto",children:(0,jsx_runtime.jsx)("button",{type:"submit",className:"jsx-d6e094823c70936b btn btn-secondary btn-sm btn-calculate",children:"Calculate"})})})]})]}),(0,jsx_runtime.jsxs)("div",{className:"row",children:[(0,jsx_runtime.jsxs)("div",{className:"row",children:[(0,jsx_runtime.jsx)("div",{className:"col-md-8 col-sm-8",children:"Monthly Installement"}),(0,jsx_runtime.jsx)("div",{className:"col-md-4 col-sm-4",children:Installement})]}),(0,jsx_runtime.jsxs)("div",{className:"row",children:[(0,jsx_runtime.jsx)("div",{className:"col-md-8 col-sm-8",children:"Interest Rate"}),(0,jsx_runtime.jsxs)("div",{className:"col-md-4 col-sm-4",children:[Percentage," %"]})]}),(0,jsx_runtime.jsxs)("div",{className:"row",children:[(0,jsx_runtime.jsx)("div",{className:"col-md-8 col-sm-8",children:"EMI Period"}),(0,jsx_runtime.jsxs)("div",{className:"col-md-4 col-sm-4",children:[Period," months"]})]})]})]})})})})})})]})}var Home_module=__webpack_require__(7160),Home_module_default=__webpack_require__.n(Home_module);function Home(){return(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("main",{style:Home_module_default().main,children:(0,jsx_runtime.jsx)(Compare,{})})})}},6974:function(module){module.exports={heading:"Compare_heading__lIHBQ",addcompare:"Compare_addcompare__QXjBq",container:"Compare_container__VWps5",card:"Compare_card__JH_uW",prodimg:"Compare_prodimg__6Epju",details:"Compare_details__b0TNN",compare:"Compare_compare__OP3Iq"}},7160:function(){},8490:function(module){module.exports={modal:"Modal_modal__yDLSi",img:"Modal_img__XVbN0",select:"Modal_select__LpMKT",paid:"Modal_paid__N4S3t","btn-calculate":"Modal_btn-calculate__yFLGw",row:"Modal_row__hmR09"}}},function(__webpack_require__){__webpack_require__.O(0,[892,774,888,179],function(){return __webpack_require__(__webpack_require__.s=8328)}),_N_E=__webpack_require__.O()}]);