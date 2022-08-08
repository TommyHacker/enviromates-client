
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../public/styles/css/main.css';
import { Routes, Route } from 'react-router-dom';
import { Home, Login } from './pages';
import Layout from './Layout';

// const name = '';



const App = () => {
	return (
		<>
      
        <Routes>		
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      
    </>
	)
};

export default App;
