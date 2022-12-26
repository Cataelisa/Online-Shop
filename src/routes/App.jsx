import React from "react";
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import RecoveryPassword from "../containers/RecoveryPassword";
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/global.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App () {
  return (<BrowserRouter> <Layout> <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/recovery-password" element={<RecoveryPassword/>} />
          <Route path="*" element={<NotFound/>} />

        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;