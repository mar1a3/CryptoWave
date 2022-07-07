import React from 'react';
import { Navbar, About, Market, Advantages, Subscription, Footer } from './components';
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { Show } from './pages/Show';


function App() {

  return (
    <div className='App'>
      <Navbar />
      <About/> 
      <Advantages/>
      <BrowserRouter>
      <Routes> 
        <Route index element = {<Market/>}/> 
        <Route path= "/:id" element={<Show/>}/>
      </Routes>
      </BrowserRouter> 
      <Subscription/>
      <Footer/>
    </div>
  );
}

export default App;
