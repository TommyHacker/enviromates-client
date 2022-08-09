import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<>
			<Navbar bg='light' variant='light' expand='lg'>
				<Container fluid>
					<Navbar.Brand href='/'>
						<img
							alt='logo'
							src={logo}
							width='150'
							height='75'
							className='d-inline-block align-top'
						/>{' '}
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-auto'>
							<Link className='home-link' to={'/'}>
								Home
							</Link>

							<Link className='login-link' to={'/login'}>
								Login
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default NavBar;
