import { createSlice } from "@reduxjs/toolkit";
import cSharp from '../Images/cSharp.png'

const skillDetailSlice = createSlice({
    name: 'skillDetail',
    initialState: {
        currentSkill: {
            name: "C#", 
            image: cSharp, 
            rating: <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>,
            accomplishments: "Designed the Sanpete Pantry Website and my Square Demo in C#"
        },
        showSkill: true,
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