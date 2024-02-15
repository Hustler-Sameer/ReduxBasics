
// creating a store and reducer function here

// import {createStore} from 'redux';


import { createSlice , configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter';
import authSlice from './auth';

// now  creating store from slice
const store = configureStore({
    //here we can configure 
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer,
    }
});
export const authActions = authSlice.actions;

export const counterActions = counterSlice.actions;
export default store;

