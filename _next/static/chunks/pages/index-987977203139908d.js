(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return __webpack_require__(1233)}])},1233:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Home}});var jsx_runtime=__webpack_require__(5893),react=__webpack_require__(7294),Faq_module=__webpack_require__(5707),Faq_module_default=__webpack_require__.n(Faq_module);function Faq(param){let{faqs}=param,[data,setData]=(0,react.useState)([]);async function getData(){var result=await fetch("".concat("http://127.0.0.1:8000","/api/faq")),result=await result.json();setData(result)}return(0,react.useEffect)(()=>{getData()},[]),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("div",{className:Faq_module_default().faq,children:(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)("ol",{children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("h4",{children:"FAQ"})}),data.map(item=>(0,jsx_runtime.jsx)("li",{children:item.description},item.id))]})})})})}var next_router=__webpack_require__(1163),Product_module=__webpack_require__(5287),Product_module_default=__webpack_require__.n(Product_module);function Product(param){let{product}=param,router=(0,next_router.useRouter)();return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("div",{className:Product_module_default().card,children:[(0,jsx_runtime.jsx)("div",{className:Product_module_default().prodimg,children:(0,jsx_runtime.jsx)("img",{width:400,height:200,src:"".concat("http://127.0.0.1:8000","/product.image"),alt:product.name})}),(0,jsx_runtime.jsx)("div",{className:Product_module_default().details,children:(0,jsx_runtime.jsxs)("p",{children:["Name:",product.name,(0,jsx_runtime.jsx)("br",{}),"Price: ",product.price]})}),(0,jsx_runtime.jsx)("div",{className:Product_module_default().compare,children:(0,jsx_runtime.jsx)("button",{type:"button",onClick(){var dataObj,dataObject;return dataObject=[],void("undefined"!=typeof Storage?(localStorage.getItem("dataObject")&&localStorage.getItem("dataObject").length>0&&(dataObject=JSON.parse(localStorage.getItem("dataObject"))),dataObj={id:product.id,image:product.image,name:product.name,price:product.price},dataObject.push(dataObj),localStorage.setItem("dataObject",JSON.stringify(dataObject))):alert("Error: Localstorage not supported"),router.push("/compare"))},children:"Compare"})})]},product.id)})}function Productlist(){let[data,setData]=(0,react.useState)([]);async function getData(){var result=await fetch("".concat("http://127.0.0.1:8000","/api/product")),result=await result.json();setData(result)}return(0,react.useEffect)(()=>{getData()},[]),(0,next_router.useRouter)(),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:Product_module_default().heading,children:"Products"}),(0,jsx_runtime.jsx)("div",{className:Product_module_default().container,children:data.map(product=>(0,jsx_runtime.jsx)(Product,{product:product},product.id))})]})}Promise.resolve().then(__webpack_require__.t.bind(__webpack_require__,2770,23)).NextConfig;var Home_module=__webpack_require__(7160),Home_module_default=__webpack_require__.n(Home_module);function Home(){return(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)("main",{className:Home_module_default().main,children:[(0,jsx_runtime.jsx)(Productlist,{}),(0,jsx_runtime.jsx)(Faq,{})]})})}},5707:function(module){module.exports={faq:"Faq_faq__Zn7EP"}},7160:function(){},5287:function(module){module.exports={heading:"Product_heading__ZInsr",container:"Product_container__fK9cn",card:"Product_card__wNsd3",prodimg:"Product_prodimg__vwBst",details:"Product_details__OMEfA",compare:"Product_compare__QioE_"}},1163:function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__(880)},2770:function(module){"use strict";module.exports=next}},function(__webpack_require__){__webpack_require__.O(0,[774,888,179],function(){return __webpack_require__(__webpack_require__.s=5557)}),_N_E=__webpack_require__.O()}]);