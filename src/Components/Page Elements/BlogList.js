import Card from '../Component Elements/Card'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { uiActions } from '../../Store/ui-Slice'
import SQL from '../../Documents/SQL- 01_01_2020 - 09_11_2021 CDC Covid Deaths Dataset Analysis.pdf'
import API from '../../Documents/Consuming a RESTful API.pdf'
import Json from '../../Documents/Securing an API with Json Web Tokens and Microsoft.Authorization.pdf'
import Todo from '../../Documents/TodoListApi Documentation.pdf'

const BlogList = () => {
    const blogs = [
        {
            id: 1,
            title: 'Consuming a RESTful API',
            description: 'Using a free public API I demonstrate how to consume and display the response data using C#/.Net',
            url: API,
        },
        {
            id: 2,
            title: 'PostgreSQL Data Analysis',
            description: 'Using SQL Queries on a dataset I imported into PGAdmin, I extract useful stories from the data',
            url: SQL,
        },
        {
            id: 3,
            title: 'Designing API with CRUD Endpoints',
            description: 'I design my own custom API with full CRUD capabilities that stores to a local Postgres Database',
            url: Todo,
        },
        {
            id: 4,
            title: 'Securing API Endpoints with Json Web Tokens',
            description: 'I extend my existing custom API to secure its endpoints with Json Web Tokens',
            url: Json,
        },
    ]

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(uiActions.NotOnLandingPage())
    },[dispatch])

    return (
        <div className="container py-5 my-5">
            <h1 className="text-center">Documentation of my Skills and Knowledge</h1>
            <div className="row justify-content-center mt-5">
                <div className="row">
                    {blogs.map(blog =>
                        <NavLink className="col-lg-6" key={blog.id} to={`blogs/${blog.id}`}>
                            <Card id={blog.id} title={blog.title} description={blog.description} />
                        </NavLink>
                    )}
                </div>
            </div>
        </div>
        
        
    )
}

export default BlogList;