import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { contactsApi } from "./contacts/contactsApi";
import  contactsSlice  from 'redux/contactsSlice';

export const store = configureStore({
    reducer: {
        contacts: contactsSlice,
        [contactsApi.reducerPath]: contactsApi.reducer,
    },
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware(),
        contactsApi.middleware,
    ],
});
setupListeners(store.dispatch);












