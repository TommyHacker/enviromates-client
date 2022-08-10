import React from 'react';
import LoginForm from '../../components/LoginForm';
import RegisterForm from '../../components/RegisterForm';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import { motion } from 'framer-motion'

export default function Login() {
	const [switchForm, setSwitchForm] = useState(false);
	return (
		<motion.div
			initial={{opacity: 0, }}
			animate={{opacity: 1}}
			transition={{ delay: 1.2, duration: 1.5}}
			exit={{opacity: 0}}
			style={{marginTop:'20vh', height:'100%'}}
		>
			{switchForm ? (
					<RegisterForm setSwitchForm={setSwitchForm} />
			) : (
					<LoginForm setSwitchForm={setSwitchForm} />
			)}
		</motion.div>
	);
}
