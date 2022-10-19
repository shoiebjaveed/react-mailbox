import { createSlice } from "@reduxjs/toolkit";

const initialState = { read: false }

const inboxSlice = createSlice({
    name: 'inbox',
    initialState,
    reducers: {
        remove: (state, action) => {
            const { id } = action.payload
            const existMail = state.mails.find((mail) => mail.id === id);
            if (existMail) {
                state.mails = state.mails.filter((mail) => mail.id !== id)
            }
        }, 
        markdone: (state) => {
            state.read = true
        }
    }
})

export const inboxAction = inboxSlice.actions;
export default inboxSlice;