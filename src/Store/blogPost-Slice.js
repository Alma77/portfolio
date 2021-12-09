import { createSlice } from "@reduxjs/toolkit"

const blogPostSlice = createSlice({
    name: 'blogPost',
    initialState: {
        currentPost: ""
    },
    reducers: {
        SetBlogPost(state, action)
        {
            state.currentPost = action.payload
        },      
    }
});

export const blogPostActions = blogPostSlice.actions;
export default blogPostSlice;