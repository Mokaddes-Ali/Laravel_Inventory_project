import './bootstrap';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Approute from './routes/approute';
import Sidebar from './components/Sidebar';
import TopBar from './components/Topbar';
import Footer from './components/Footer';



ReactDOM.createRoot(document.getElementById('app')).render(
    <>
     {/* <BrowserRouter>
     <Approute />
    </BrowserRouter> */}
 <h1> Hello World </h1>
    </>
);
