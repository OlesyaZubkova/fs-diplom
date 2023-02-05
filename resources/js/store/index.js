import { configureStore } from "@reduxjs/toolkit";
import calendar from '../reducers/createCalendarSlice';

export const store = configureStore({
    reducer: {
        calendar,
    },
});
