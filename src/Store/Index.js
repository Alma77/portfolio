import { configureStore } from "@reduxjs/toolkit";
import cardDetailSlice from "./cardDetail-Slice";

const store = configureStore({
    reducer: {cardDetail: cardDetailSlice.reducer}
});

export default store;