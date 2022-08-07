import React from 'react';
import '../public/styles/css/main.css';
import Layout from './Layout';
import { Routes, Route } from 'react-router-dom';
import {Home, Login} from './pages';
import Button from '@mui/material/Button';

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
         <Button variant="contained" style={{
                    flex: "34%",
                    minWidth: "200px",
                    fontSize: "1em",
                    fontWeight: "bold",
            padding: "15px",
            margin: "10px"
                  }}>
           Create Event
         </Button>

         <Button variant="contained" style={{
                    flex: "34%",
                    minWidth: "200px",
                    fontSize: "1em",
                    fontWeight: "bold",
            padding: "15px",

                  }}>
           Attend Event
         </Button>

        </main>
			
			  <footer className="footer">


			  </footer>
			
			</div>
		</>

	);
};

export default App;
