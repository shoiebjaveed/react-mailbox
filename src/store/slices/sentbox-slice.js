import { createSlice } from "@reduxjs/toolkit";

const initialState = { mails: [] }

const sentboxSlice = createSlice({
    name: 'sentbox',
    initialState,
    reducers: {
        store: (state, action) => {
            state.mails.push(action.payload)
        }
    }
})

export const sentboxAction = sentboxSlice.actions;
export default sentboxSlice;