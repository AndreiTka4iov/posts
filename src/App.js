import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/UI/footer/Footer';
import Header from './components/UI/header/Header';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Home></Home>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;