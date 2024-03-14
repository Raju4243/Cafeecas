import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from './App';
import Contact from './components/Contact';
import Privacy from './components/Privacy';
import F404 from './components/F404'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
  let path;
  switch (path):
  case "/":
    <Route path='/' element={<App/>}/>
  case "contact":
  <Route path='/contact' element={<Contact/>}/>

  case "privacy":
    <Route path='/privacy' element={<Privacy/>}/>
  case "privacy":
  <Route path='/privacy/contact' element={<Contact/>}/>
  case "privacy":
  <Route path='/contact/privacy' element={<Privacy/>}/>
  case "*":
    <Route path='/*' element={<F404/>}/>
</Routes>
</BrowserRouter>


);

