
import Layout from './Layout';
import { Routes, Route } from 'react-router-dom';
import {Home, Login} from './pages';
import React from 'react';
import '../public/styles/css/main.css';


const App = () => {
	return (
			
            
                <Routes>		
					<Route path="/" element={<Layout />}>
						<Route path="/" element={<Home />} />
						<Route path="login" element={<Login />} />
					</Route>
                </Routes>
          
		









	)
};

export default App;
