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
		<Container fluid>
			<Navbar className='navbar-main' bg='light' variant='light' expand='lg'>
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

							{!user.username && (
								<Link className='login-link' to={'/login'}>
									Login
								</Link>
							)}
							{user.username && <a onClick={logOutHandler}>Log out</a>}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			</Container>
		</>
	);
};

export default Navigation;
