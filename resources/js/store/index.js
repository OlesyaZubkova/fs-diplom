import { configureStore } from "@reduxjs/toolkit";
import calendar from '../reducers/createCalendarSlice';
import seance from '../reducers/createSeanceSlice';

export const store = configureStore({
    reducer: {
        calendar,
        seance,
    },
});
