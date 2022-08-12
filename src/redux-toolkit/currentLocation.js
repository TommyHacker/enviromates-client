import { createSlice } from '@reduxjs/toolkit';

export const currentLocationSlice = createSlice({
	name: 'currentLocation',
	initialState: {
		longitude: 50,
		latitude: 50,
	},
	reducers: {
		setLocation: (state, { payload }) => {
			state.longitude = payload.longitude;
			state.latitude = payload.latitude;
		},
	},
});

export const currentLocationActions = currentLocationSlice.actions;

export default { currentLocationSlice };
