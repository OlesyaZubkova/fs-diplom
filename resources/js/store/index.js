import { configureStore } from "@reduxjs/toolkit";
import calendar from '../reducers/createCalendarSlice';
import seance from '../reducers/createSeanceSlice';
import popup from '../reducers/createPopupSlice';
import admin from '../reducers/createAdminSlice'

export const store = configureStore({
    reducer: {
        calendar,
        seance,
        admin,
        popup,
    },
});
