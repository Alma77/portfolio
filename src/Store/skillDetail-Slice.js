import { createSlice } from "@reduxjs/toolkit"

const skillDetailSlice = createSlice({
    name: 'skillDetail',
    initialState: {
        currentSkill: {name: "", img: "", rating: <></>, accomplishments: ""},
        showSkill: false,
    },
    reducers: {
        SetCurrentSkill(state, action) {
            state.currentSkill = action.payload
        },
        ToggleSkill(state, action) {
            if(state.currentSkill.name === action.payload.name || state.currentSkill.name === "")
            {
                state.showSkill = !state.showSkill
            }
        }   
    }
});

export const skillDetailActions = skillDetailSlice.actions;
export default skillDetailSlice;