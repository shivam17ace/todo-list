import React from "react";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Render from ".././pages/Render";
import ListData from "./List";
function App() {
  return (<>
    <Header />
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ListData />}></Route>
    <Route path='/Render/:id' element={<Render />}></Route>
    </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
