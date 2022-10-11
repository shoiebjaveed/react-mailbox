import { createSlice } from "@reduxjs/toolkit";

const initialState = { read: false }

const inboxSlice = createSlice({
    name: 'inbox',
    initialState,
    reducers: {
        markdone: (state) => {
            state.read = true
        }
    }
})

export const inboxAction = inboxSlice.actions;
export default inboxSlice;