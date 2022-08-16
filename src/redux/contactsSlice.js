import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        filter: '',
    },
    reducers: {
        changeFilter(state, {payload}) {
            state.filter = payload
        },
    },
});

export const { addContact, deleteContact, changeFilter } = contactsSlice.actions;
export default contactsSlice.reducer;