import React from 'react';
import LoginForm from '../../components/LoginForm';
import RegisterForm from '../../components/RegisterForm';
import { useState } from 'react';

export default function Login() {
	const [switchForm, setSwitchForm] = useState(false);
	return (
		<div>
			{switchForm ? (
				<RegisterForm setSwitchForm={setSwitchForm} />
			) : (
				<LoginForm setSwitchForm={setSwitchForm} />
			)}
		</div>
	);
}
