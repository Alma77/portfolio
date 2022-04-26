import { createSlice } from "@reduxjs/toolkit"

const blogPostSlice = createSlice({
    name: 'blogPost',
    initialState: {
        blogPosts: 
        [
            {
                id: 1,
                title: 'Consuming a RESTful API',
                description: 'Using a free public API I demonstrate how to consume and display the response data using C#/.Net',
                image: "cardBackground"
            },
            {
                id: 2,
                title: 'Securing an API with Json Web Tokens and Microsoft.Authorization',
                description: 'Using Json Web Tokens and Microsoft.Authorizaiton I secure my TodoListAPI project so that only authorized users can access certain data',
                image: ""
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
            {
                id: 7,
                title: 'Setting Up PCI DSS Standard Credit Card Input Using Square Web Payment SDK',
                description: 'I show how to create a Credit Card input in an ASP.NET Core C# Web Application using Square'
            },
            {
                id: 8,
                title: 'Registering a New Customer with Square API',
                description: "I show how to create a new customer on a Square Application using a ASP.NET Core C# Web Application"
            },
            {
                id: 9,
                title: 'Single Credit Card Payment Processing Using Square',
                description: "I show how to take in a credit card number and charge amount and process the payment using a ASP.NET Core C# Web Application and Square API"
            },
            {
                id: 10,
                title: 'Subscription Credit Card Payment Processing Using Square',
                description: "I show how to take in a credit card number and charge amount and create a subscription payment using a ASP.NET Core C# Web Application and Square API"
            },
            {
                id: 11,
                title: "Setting up Node.js and Creating a React Application",
                description: "I walkthrough downloading the software and tools that you need and show how to create your basic default react application"
            }
        ]
    },
    reducers: {
        SetBlogPost(state, action)
        {
            localStorage.setItem("currentPost", action.payload)
        },      
    }
});

export const blogPostActions = blogPostSlice.actions;
export default blogPostSlice;