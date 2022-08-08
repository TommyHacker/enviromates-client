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
				  margin: "10px"
				  
                }}>
				 Attend Event
			 </Button>

				</body>
			
			<footer className="footer">


			</footer>
			
			</div>
  )
}
