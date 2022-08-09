import React from 'react'
<<<<<<< HEAD
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
=======
import Button from 'react-bootstrap/Button';

export default function User() {
  return (
    <>
      <main>
        <h2>Welcome there, {username}!</h2>
      <br />
      <br />
        <Button variant="info">Create Event</Button>
        <Button variant="info">Attend Event</Button>

      </main>
>>>>>>> 334fa692ecd3c6d50d5b9b442052ee0ece256680
			
// 			<footer className="footer">
// 			</footer>
			
     </>
  )
};



