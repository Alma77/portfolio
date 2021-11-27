import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState:{
        showDetail: false,
        showResume: false,
        showContactMe: false,
        onLandingPage: true,
        isLoading: false,
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
        },
        IsOnLandingPage(state) {
            state.onLandingPage = true;
        },
        NotOnLandingPage(state) {
            state.onLandingPage = false;
        },
        ToggleIsloading(state) {
            state.isLoading = !state.isLoading
        }
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice;