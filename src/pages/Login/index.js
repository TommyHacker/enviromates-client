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
			transition={{ delay: 0.1, duration: 1.2}}
			exit={{opacity: 0}}
			style={{ margin: 'auto', height:'100%'}}
		>
			{switchForm ? (
					<RegisterForm setSwitchForm={setSwitchForm} />
			) : (
					<LoginForm setSwitchForm={setSwitchForm} />
			)}
		</motion.div>
	);
}
