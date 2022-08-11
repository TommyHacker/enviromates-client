import { createSlice } from '@reduxjs/toolkit';

// POINT TRACKER FOR USER -----------------------------------------------//
const initialState = {
	points: 0,
	eventsAttended: 0,
	eventsHosted: 0,
	createdEvents: [],
	isLoading: true,
};

// POINT TRACKER -----------------------------------------------//
export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload;
		},
	},
});

//VIEW IN REDUX-DEV-TOOLS BROWSER EXTENSION ---------------------------

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
