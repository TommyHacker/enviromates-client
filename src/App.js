import React, { useRef, useEffect, useState } from 'react';
import '../public/styles/css/main.css';
import Layout from './Layout';
import { Routes, Route } from 'react-router-dom';
import {Home, Login} from './pages';


const name = '';


const App = () => {
	return (
		<>
			<div className="bodycss">
				<header> 
					<div className="top"></div>
					<br />
					<br />
					<h1 className="logo">EnviroMate Logo</h1>
					<br />
					<br />
          <Routes>		
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="login" element={<Login />} />
            </Route>
          </Routes>
				</header>

			  <main>
         <h2 className="heading">Welcome, {name}!</h2>
         <br />
         <br />
         
        </main>
			
			  <footer className="footer">


			  </footer>
			
			</div>
		</>

	);
};

export default App;
