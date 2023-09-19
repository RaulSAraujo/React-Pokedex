import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/global-styles';
import { Home } from './pages/Home';
import { Pokemon } from './pages/Pokemon';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemon' element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
