import { createSlice } from "@reduxjs/toolkit"

const cardDetailSlice = createSlice({
    name: 'cardDetail',
    initialState: {
        currentDocument: {title: "", url: ""},
    },
    reducers: {
        SetCurrentDocument(state, action) {
            state.currentDocument = action.payload
        }   
    }
});

export const cardDetailActions = cardDetailSlice.actions;
export default cardDetailSlice;