import React from 'react';
import Editor from './Editor';
import Home from './home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 

function App() {
  return (
   
    <BrowserRouter basename="/Port-Gen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor" element={<Editor />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
