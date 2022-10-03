import { configureStore } from "@reduxjs/toolkit";
import sentboxSlice from "./slices/sentbox-slice";


const store = configureStore({
    reducer: {
        sentbox: sentboxSlice.reducer,
    }
})

export default store