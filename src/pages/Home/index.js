import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import logo from '../../assets/images/logo.png';
import { useSelector } from 'react-redux';

export default function Home() {
	const user = useSelector((state) => state.user);

	const clickHandler = (e) => {
		console.log(user.username);
	};

	return (
		<div>
			<Container>
				<Image fluid src={logo} alt='logo'></Image>
				{user && <h1>{user.username}</h1>}
			</Container>
			<button onClick={(e) => clickHandler(e)}>log user</button>
		</div>
	);
}
