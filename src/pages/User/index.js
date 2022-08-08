import Button from 'react-bootstrap/Button';
import React from 'react'
import '../public/styles/css/main.css';

function CreateEvent() {
  return (
    <>
      <Button variant="info">Create Event</Button>{' '}
    
    </>
  );
}

export default CreateEvent();

function  AttendEvent() {
  return (
    <>
      <Button variant="info">Attend Event</Button>{' '}
    
    </>
  );
}

export default AttendEvent();

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