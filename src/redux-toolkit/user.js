import { createSlice } from '@reduxjs/toolkit';

// if username has been dispatched, set state to given username
export const userSlice = createSlice({
	name: 'user',
	initialState: {
		id: '',
		username: '',
		email: '',
		firstName: '',
		lastName: '',
		currentPoints: '',
		eventsAttended: '',
		eventsHosted: '',
		createdAt: '',
	},

	reducers: {
		setUser: (state, { payload }) => {
			console.log('set user payload', payload);
			return (state = payload);
		},
	},
});

export const userActions = userSlice.actions;

export default { userSlice };
