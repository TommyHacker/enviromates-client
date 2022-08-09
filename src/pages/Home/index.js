import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import logo from '../../assets/images/logo.png';

const Home = () => {
	return (
		<div>
			<Container>
				<Image fluid src={logo} alt='logo'></Image>
			</Container>
		</div>
	);
};

export default Home;
