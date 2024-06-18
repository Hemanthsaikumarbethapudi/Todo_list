import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



// function Helloworld() {
//   const img = "https://www.google.com/search?sca_esv=580358c80b5d5430&rlz=1C1CHZN_enIN1042IN1042&sxsrf=ADLYWIKAPfXzJElG8JPjMSNsgGYFtwpS0Q:1718444260548&q=hemanth+sai+kumar+bethapudi&udm=2&fbs=AEQNm0COtQ6qE5snXClm_cWqGTLX_jMP5V4l2v9LemFtanifXVoSDc4z6nO25TAUUgCi_PqCbebMxH2l70BIpVN1tqaotXuhxLKSz0A7jFus2NRBE1IzXbKlu4T6U4i0S56MHfKseo1LkFYlRacP3ANIt81UHHz_xmAfwY47cvJIyr8IDpHSNdh5YyClmG0uHzxOx4K9hegDLLwym00ZuHOE4WKtb1FDJw&sa=X&ved=2ahUKEwjBkN3dp92GAxU8S2wGHXLWAMwQtKgLegQIDhAB&biw=1366&bih=607&dpr=1#vhid=yAMqGS4q_TUwBM&vssid=mosaic";

//   return <a href={img}>Click me</a>
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
