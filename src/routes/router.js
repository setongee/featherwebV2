import React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom'
import HomePage from '../pages/homepage/homepage';
import Support from '../pages/support/support';

const RouterClass = () => {

    return (

        <Routes>

            <Route path = "/">

                <Route index element = {<HomePage/>} />
                <Route path = 'support' element = {<Support/>} />

                <Route path="*" element = {<h1>Page not found</h1>} />


            </Route>

            
        </Routes>

    );
}

export default RouterClass;
