import React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom'
import HomePage from '../pages/homepage/homepage';
import Support from '../pages/support/support';
import Privacy from '../Privacy';
import Withdraw from '../pages/features/withdraw';
import Transfer from '../pages/features/transfer';
import Bills from '../pages/features/bills';
import Chat from '../pages/features/chat';
import Faq from '../pages/faq/faq';

const RouterClass = () => {

    return (

        <Routes>

            <Route path = "/">

                <Route index element = {<HomePage/>} />
                <Route path = 'support' element = {<Support/>} />

                {/* Features routes */}

                <Route path = 'features/withdraw' element = {<Withdraw/>} />
                <Route path = 'features/transfer' element = {<Transfer/>} />
                <Route path = 'features/bills' element = {<Bills/>} />
                <Route path = 'features/chat' element = {<Chat/>} />

                <Route path = 'privacy' element = {<Privacy/>} />

                <Route path="*" element = {<h1>Page not found</h1>} />


            </Route>

            
        </Routes>

    );
}

export default RouterClass;
