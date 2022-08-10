import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import * as Pages from '../../pages';
import Layout from '../../Layout';

import {AnimatePresence} from "framer-motion"

function AnimatedRoutes(){
    const location = useLocation();
   
    return(
        <AnimatePresence>
           <Routes location={location} key={location.pathname}>
				<Route path='/' element={<Layout />}>
					<Route path='/' element={<Pages.Home />} />
					<Route path='/login' element={<Pages.Login />} />
					<Route path='/username' element={<Pages.User />} />
					<Route path='create-event' element={<Pages.CreateEvent />} />
					<Route path='attend-event' element={<Pages.AttendEvent />} />
					<Route path='completed-event' element={<Pages.CompletedEvent />} />
				</Route>
			</Routes>
        </AnimatePresence>    
    )
}

export default AnimatedRoutes