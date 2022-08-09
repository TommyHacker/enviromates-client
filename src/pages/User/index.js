import React from 'react'
import '../public/styles/css/main.css';


export default function User() {
  return (
    <div className="bodycss">
				<header> 
					<div className="top"></div>
					<br />
					<br />
					<h1 className="logo">EnviroMate Logo</h1>
					<br />
					<br />
				</header>

				<body>
             <h2 className="heading">Welcome, {name}!</h2>
			 <br />
			 <br />
			

				</body>
			
			<footer className="footer">


			</footer>
			
		</div>

  )
};