import { createSlice } from "@reduxjs/toolkit"

const blogPostSlice = createSlice({
    name: 'blogPost',
    initialState: {
        currentPost: "",
        blogPosts: 
        [
            {
                id: 1,
                title: 'Consuming a RESTful API',
                description: 'Using a free public API I demonstrate how to consume and display the response data using C#/.Net',
            },
            {
                id: 2,
                title: 'Securing an API with Json Web Tokens and Microsoft.Authorization',
                description: 'Using Json Web Tokens and Microsoft.Authorizaiton I secure my TodoListAPI project so that only authorized users can access certain data',
            },
            {
                id: 3,
                title: 'PostgreSQL Database in a Docker Container',
                description: 'I host a PostgreSQL Database in a Docker Container and show how to connect to it from an AspNetCore application',
            },
            {
                id: 4,
                title: 'TodoListAPI',
                description: 'I design an API that connects to my PostgreSQL Database and stores data for a Todo List',
            },
            {
                id: 5,
                title: 'Serilog Logging',
                description: 'I add logging to my IMdb movie search application'
            },
            {
                id: 6,
                title: 'Setting Up Simple CI-CD Pipeline for React App',
                description: 'I show how easy it is to get started with a simple but powerful CI/CD Pipeline'
            },
        ]
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