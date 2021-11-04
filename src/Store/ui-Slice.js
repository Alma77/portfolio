import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState:{
        showDetail: false,
        showResume: false,
        showContactMe: false,
    },
    reducers: {
        ShowDetail(state) {
            state.showDetail = true;
        },
        HideDetail(state) {
            state.showDetail = false;
        },
        ShowResume(state) {
            state.showResume = true;
        },
        HideResume(state) {
            state.showResume = false;
        },
        ShowContactMe(state) {
            state.showContactMe = true;
        },
        HideContactMe(state) {
            state.showContactMe = false;
        }
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice;