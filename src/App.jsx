import { useState } from "react";
import Home from "./assets/pages/home/Home";
import Login from "./assets/pages/login/Login";
import List from "./assets/pages/list/List";
import Single from "./assets/pages/single/Single";
import New from "./assets/pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="users">
              <Route index element={<List />}></Route>
              <Route path=":userId" element={<Single />}></Route>
              <Route path="new" element={<New />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
