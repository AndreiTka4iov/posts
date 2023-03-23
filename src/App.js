import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/UI/footer/Footer';
import Header from './components/UI/header/Header';
import Home from './pages/Home';
import Post from './pages/Post';
import Users from './pages/Users';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='post/:id' element={<Post />}/>
          <Route path='/users' element={<Users />}/>
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;