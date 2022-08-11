import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './user';
import { currentLocationSlice } from './currentLocation';
import { eventsSlice } from './events';
import counterReducer from './features/counterSlice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,

		user: userSlice.reducer,

		currentLocation: currentLocationSlice.reducer,

		events: eventsSlice.reducer,
	},
});

export default store;
