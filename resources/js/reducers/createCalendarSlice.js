import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    films: [],
    cinemaHalls: [],
};

export const getCalendar = createAsyncThunk("calendar/getCalendar", async () => {
    const response = await fetch(`/api/client/calendar`);
    return await response.json();
});

const createCalendarSlice = createSlice({
    name: "calendar",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCalendar.fulfilled, (state, action) => {
                const { films, cinemaHalls } = action.payload;
                state.films = films;
                state.cinemaHalls = cinemaHalls;
            });
        },
});

export default createCalendarSlice.reducer;
