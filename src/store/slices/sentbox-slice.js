import { createSlice } from "@reduxjs/toolkit";

const initialState = { mails: [] }

const sentboxSlice = createSlice({
    name: 'sentbox',
    initialState,
    reducers: {
        store: (state, action) => {
            state.mails.push(action.payload)
        },
        delete: (state, action) => {
            const { id } = action.payload
            const existMail = state.mails.find((mail) => mail.id === id);
            if (existMail) {
                state.mails = state.mails.filter((mail) => mail.id !== id)
            }
        },
        replace: (state, action) => {
            state.mails = action.payload.mails
        }
    }
})

export const sentboxAction = sentboxSlice.actions;
export default sentboxSlice;