import React, { useEffect } from 'react';
import '../public/styles/css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import * as Pages from './pages';
import Layout from './Layout';
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from './redux-toolkit/user';
import { currentLocationActions } from './redux-toolkit/currentLocation';
import { eventsActions } from './redux-toolkit/events';

const App = () => {
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	const getUserData = (token) => {
		// create a form of data
		const formData = new FormData();
		// add the token to the form ready for the back end
		formData.append('accesstoken', token);
		// send the request with the form data
		const options = {
			method: 'POST',
			mode: 'cors',
			body: formData,
		};
		fetch('https://enviromates.herokuapp.com/users', options)
			.then((result) => result.json())
			.then((res) => {
				console.log(res);
				if (res.success === 'True') {
					const data = res.user;
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
			})
			.catch((err) => console.log(err));
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

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(async (position) =>
			dispatch(
				currentLocationActions.setLocation({
					latitude: position.coords.latitude,
					longitude: position.coords.longitude,
				})
			)
		);
	}, []);

	useEffect(() => {
		const options = {
			method: 'GET',
			mode: 'cors',
		};
		fetch('https://enviromates.herokuapp.com/events', options)
			.then((result) => result.json())
			.then((res) => {
				dispatch(eventsActions.setEvents(res.events));
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='/' element={<Pages.Home />} />
				<Route path='/login' element={<Pages.Login />} />
				<Route path='/username' element={<Pages.User />} />
				<Route path='/create-event' element={<Pages.CreateEvent />} />
				<Route path='/attend-event' element={<Pages.AttendEvent />} />
				<Route path='/completed-event' element={<Pages.CompletedEvent />} />
				<Route path='/event'>
					<Route path=':id' element={<Pages.SingleEventPage />} />
				</Route>
			</Route>
		</Routes>
	);
};

export default App;
