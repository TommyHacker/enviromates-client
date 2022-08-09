import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './user';
import counterReducer from './features/counterSlice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		user: userSlice.reducer,
	},
});

export default store;
