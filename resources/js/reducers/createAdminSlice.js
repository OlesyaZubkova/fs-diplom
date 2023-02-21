import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    cinemaHalls: [],
    seats: [],
    movies: [],
    seances: [],
    selectedCinemaHallScheme: {},
};

export const getHalls = createAsyncThunk(
    "admin/getHalls",
    async () => {
        const response = await fetch(`/api/cinemaHall`);
        return await response.json();
});

export const createHall = createAsyncThunk(
    "admin/createHall",
    async (name) => {
        const response = await fetch(`/api/cinemaHall`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name}),
        });
        return response.ok;
    }
);

export const deleteHall = createAsyncThunk(
    "admin/deleteHall",
    async (id) => {
        const response = await fetch(`/api/cinemaHall/${id}`, {
            method: "DELETE",
        });
        return response.ok;
    }
);

export const updateHall = createAsyncThunk(
    "admin/updateHall",
    async (cinemaHall) => {
        const response = await fetch(`/api/cinemaHall/${cinemaHall.id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(cinemaHall),
        });
        return response.ok;
    }
);

export const getSeats = createAsyncThunk(
    "admin/getSeats",
    async (id) => {
        const response = await fetch(`/api/seats/${id}`);
        return await response.json();
});

export const createSeats = createAsyncThunk(
    "admin/createSeats",
    async (_, {getState}) => {
        const {seats} = getState().admin;
        const response = await fetch(`/api/seats`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({seats}),
        });
        return response.ok;
    }
);

export const updateSeats = createAsyncThunk(
    "admin/updateSeats",
    async (_, {getState}) => {
        const {seats} = getState().admin;
        const response = await fetch(`/api/seats/update`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({seats}),
        });
        return response.ok;
    }
);

export const getMovies = createAsyncThunk(
    "admin/getMovies",
    async () => {
        const response = await fetch(`/api/film`);
        return await response.json();
    }
);

export const createMovie = createAsyncThunk(
    "admin/createMovie",
    async ({title, description, duration, country, poster}) => {
        const response = await fetch(`/api/film`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({title, description, duration, country, poster}),
        });
        return response.ok;
    }
);

export const deleteMovie = createAsyncThunk(
    "admin/deleteMovie",
    async (id) => {
        const response = await fetch(`/api/film/${id}`, {
            method: "DELETE",
        });
        return response.ok;
    }
);

export const getSeances = createAsyncThunk(
    "admin/getSeances",
    async () => {
        const response = await fetch(`/api/session`);
        return await response.json();
    }
);

export const createSeance = createAsyncThunk(
    "admin/createSeance",
    async ({time, cinema_hall_id, film_id}) => {
        const response = await fetch(`/api/session`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({time, cinema_hall_id, film_id}),
        });
        return response.ok;
    }
);

export const deleteSeance = createAsyncThunk(
    "admin/deleteSeance",
    async (id) => {
        const response = await fetch(`/api/session/${id}`, {
            method: "DELETE",
        });
        return response.ok;
    }
);


const createAdminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        createScheme: (state, action) => {
            state.seats = action.payload;
        },
        selectCinemaHallScheme: (state, action) => {
            state.selectedCinemaHallScheme = action.payload;
        },
        changeHallSize: (state, action) => {
            const {row, chair} = action.payload;
            state.selectedCinemaHallScheme.row = row;
            state.selectedCinemaHallScheme.chair = chair;
        },
        changeSeatStatus: (state, action) => {
            const {id, status} = action.payload;
            const seat = state.seats.find((seat) => seat.id === id);
            seat.status = status;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getHalls.fulfilled, (state, action) => {
                state.cinemaHalls = action.payload;
            })
            .addCase(getSeats.fulfilled, (state, action) => {
                state.seats = action.payload;
            })
            .addCase(getMovies.fulfilled, (state, action) => {
                state.movies = action.payload;
            })
            .addCase(getSeances.fulfilled, (state, action) => {
                state.seances = action.payload;
            })
    },
});

export const {createScheme, selectCinemaHallScheme, changeHallSize, changeSeatStatus} = createAdminSlice.actions;
export default createAdminSlice.reducer;
