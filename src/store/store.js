import { configureStore } from "@reduxjs/toolkit";
import inboxSlice from "./slices/inbox-slice";
import sentboxSlice from "./slices/sentbox-slice";


const store = configureStore({
    reducer: {
        sentbox: sentboxSlice.reducer,
        inbox: inboxSlice.reducer
    }
})

export default store