import { configureStore } from "@reduxjs/toolkit";
import blogPostSlice from "./blogPost-Slice";
import cardDetailSlice from "./cardDetail-Slice";
import skillDetailSlice from "./skillDetail-Slice";
import uiSlice from "./ui-Slice";

const store = configureStore({
    reducer: {
        cardDetail: cardDetailSlice.reducer, 
        ui: uiSlice.reducer, 
        skillDetail: skillDetailSlice.reducer,
        blogPost: blogPostSlice.reducer
    }
});

export default store;