import { configureStore } from "@reduxjs/toolkit";
import cardDetailSlice from "./cardDetail-Slice";
import uiSlice from "./ui-Slice";

const store = configureStore({
    reducer: {cardDetail: cardDetailSlice.reducer, ui: uiSlice.reducer}
});

export default store;