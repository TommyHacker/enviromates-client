import React, { useEffect } from 'react';
import LoginForm from '../../components/LoginForm';
import RegisterForm from '../../components/RegisterForm';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Login() {
	const navigate = useNavigate();
	const [switchForm, setSwitchForm] = useState(false);
	const user = useSelector((state) => state.user);

	useEffect(() => {
		if (user.username && user.username != '') {
			navigate('/events');
		}
	}, [user]);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.1, duration: 1.2 }}
			exit={{ opacity: 0 }}
			style={{ margin: 'auto', height: '100%' }}>
			{switchForm ? (
				<RegisterForm setSwitchForm={setSwitchForm} />
			) : (
				<LoginForm setSwitchForm={setSwitchForm} />
			)}
		</motion.div>
	);
}
