import {configureStore} from '@reduxjs/toolkit';
import authdataReducer from "./features/auth.data.js"
import {setupListeners} from "@reduxjs/toolkit/query"
import {authApi} from './rtk/auth.rtk'

const store = configureStore({
    reducer:{
        
        authdata:authdataReducer,
        [authApi.reducerPath] : authApi.reducer,
    },
    middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(authApi.middleware),
})


setupListeners(store.dispatch);
export default store;