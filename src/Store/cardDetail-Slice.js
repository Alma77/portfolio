import { createSlice } from "@reduxjs/toolkit"

const cardDetailSlice = createSlice({
    name: 'cardDetail',
    initialState: {
        currentDocument: "",
        showDetail: false,
        numPages: 0,
        pageNumber: 1,
    },
    reducers: {
        ToggleShowDetail(state) {
            state.showDetail = !state.showDetail;
        },
        SetNumPages(state, action) {
            state.numPages = action.payload
        },
        SetPageNumber(state, action) {
            state.numPages = action.payload
        },
        SetCurrentDocument(state, action) {
            state.currentDocument = action.payload
        }   
    }
});

export const cardDetailActions = cardDetailSlice.actions;
export default cardDetailSlice;