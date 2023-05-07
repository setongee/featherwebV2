import React from 'react';
import ReactDOM from 'react-dom/client';
import FeatherApp from './featherApp';
import { BrowserRouter } from "react-router-dom";
import './fonts.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    {/* this is the home app carrier for the feather app */}

    <BrowserRouter>
    
        <FeatherApp/>
    
    </BrowserRouter>

  </React.StrictMode>
  
);
