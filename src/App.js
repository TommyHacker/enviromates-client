import React, { useRef, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/styles/css/main.css';
import { Routes, Route } from 'react-router-dom';
import * as Pages from './pages';
import Layout from './Layout';

const name = '';

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='/' element={<Pages.Home />} />
					<Route path='/login' element={<Pages.Login />} />
					<Route path='/username' element={<Pages.User />}>
						<Route path='create-event' element={<Pages.CreateEvent />} />
						<Route path='attend-event' element={<Pages.AttendEvent />} />
						<Route path='completed-event' element={<Pages.CompletedEvent />} />
					</Route>
				</Route>
			</Routes>
		</>
	);
};

export default App;
