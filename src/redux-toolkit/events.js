import { createSlice } from '@reduxjs/toolkit';

// if username has been dispatched, set state to given username
export const eventsSlice = createSlice({
	name: 'events',
	initialState: [],

	reducers: {
		setEvents: (state, { payload }) => {
			return (state = [...payload]);
		},
	},
});

export const eventsActions = eventsSlice.actions;

export default { eventsSlice };
