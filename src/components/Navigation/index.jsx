import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from '../../redux-toolkit/user';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Navigation = () => {
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const logOutHandler = () => {
		dispatch(userActions.setUser(''));
		window.localStorage.removeItem('accesstoken');
		navigate('/login');
	};

	return (
		<>
			<Container fluid className='nav-container' style={{margin: '0', padding: '0', width: '100%'}}>
				<Navbar className='navbar-main' bg='light' variant='light' expand='lg' style={{margin: '0', padding: '0', width: '100%'}}>
					<Container fluid >
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
							<Nav className='me-auto mb-3'>
								<Link className='link home-link' to={'/'}>
									Home
								</Link>

								{!user.username && (
									<Link className='link login-link' to={'/login'}>
										Login
									</Link>
								)}
								{user.username && <a onClick={logOutHandler}>Log out</a>}
								{user.username && (
									<a onClick={() => navigate('/create-event')}>create event</a>
								)}
								<Link to={'/events'}>All Events</Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</Container>
		</>
	);
};

export default Navigation;
