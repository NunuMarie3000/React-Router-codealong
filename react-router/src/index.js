import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Index.js is where our route handling will go! :)))))
//this is letting app know we're gonna use browserrouter
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './routes/products';
import Contacts from './routes/contacts';

import Product from './routes/product';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<App/>}>
          {/*path, here's how i get there, element= where i wanna go */}
          <Route path='products' element={<Products/>}>
          {/*param that is used to find a specific product */}
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='contacts' element={<Contacts/>}/>
          <Route path='*' element={<main style={{padding: '1rem'}}><p>There's nothing here!</p></main>}/>
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
