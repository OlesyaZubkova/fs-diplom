import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    session: {},
    seats: [],
};

export const getSeance = createAsyncThunk("seance/getSeats", async (id) => {
    const response = await fetch(`/api/client/seats/${id}`);
    return await response.json();
});

const createSeanceSlice = createSlice({
    name: "seance",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSeance.fulfilled, (state, action) => {
                const { session, seats } = action.payload;
                state.session = session;
                state.seats = seats;
            });
    },
});

export default createSeanceSlice.reducer;
