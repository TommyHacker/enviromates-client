import React, { useEffect } from 'react';
import '../public/styles/css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import * as Pages from './pages';
import Layout from './Layout';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { userActions } from './redux-toolkit/user';

const App = () => {
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	const getUserData = (token) => {
		// create a form of data
		const formData = new FormData();
		// add the token to the form ready for the back end
		formData.append('accesstoken', token);
		// send the request with the form data
		axios.post('http://localhost:8000/users', formData).then((res) => {
			if (res.data.success === 'True') {
				const data = res.data.user;
				dispatch(
					userActions.setUser({
						...user,
						id: data.id,
						username: data.username,
						firstName: data.first_name,
						lastName: data.last_name,
						email: data.email,
						eventsAttended: data.events_attended_by_user,
						eventsHosted: data.events_hosted_by_user,
						createdAt: data.created_at,
					})
				);
			}
		});
	};

	useEffect(() => {
		// check if theres an access token in local storage
		const accesstoken = window.localStorage.getItem('accesstoken');
		// if theres a token, and user is not currently set
		if (!user.username && accesstoken) {
			// get user data by using our token
			getUserData(accesstoken);
		}
	});

	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='/' element={<Pages.Home />} />
					<Route path='/login' element={<Pages.Login />} />
					<Route path='/username' element={<Pages.User />} />
					<Route path='/create-event' element={<Pages.CreateEvent />} />
					<Route path='/attend-event' element={<Pages.AttendEvent />} />
					<Route path='/completed-event' element={<Pages.CompletedEvent />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
