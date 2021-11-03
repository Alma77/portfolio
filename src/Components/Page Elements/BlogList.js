import Card from '../Component Elements/Card'

const BlogList = () => {
    const blogs = [
        {
            id: 1,
            title: 'PostgreSQL Data Analysis',
            description: 'Using SQL Queries on a dataset I imported into PGAdmin, I extract useful stories from the data',
            url: "../../Documents/SQL- 01_01_2020 - 09_11_2021 CDC Covid Deaths Dataset Analysis.pdf",
        },
        {
            id: 2,
            title: 'Consuming a RESTful API',
            description: 'Using a free public API I demonstrate how to consume and display the response data using C#/.Net',
            url: "../../Documents/Consuming a RESTful API with C# and Asp.Net Core.pdf",
        },
        {
            id: 3,
            title: 'Designing API with CRUD Endpoints',
            description: 'I design my own custom API with full CRUD capabilities that stores to a local Postgres Database',
            url: "../../Documents/TodoListAPI Documentation.pdf",
        },
        {
            id: 4,
            title: 'Securing API Endpoints with Json Web Tokens',
            description: 'I extend my existing custom API to secure its endpoints with Json Web Tokens',
            url: "../../Documents/Securing an API with Json Web Tokens and Microsoft.Authorization.pdf",
        },
    ]

    return (
        <div className="container border-bottom border-secondary py-3">
            <h3 className="text-white text-start py-3 ms-5">Documentation of some of my skills and knowledge:</h3>
            <div className="row justify-content-center">
                {blogs.map(blog =>
                    <Card key={blog.id} title={blog.title} description={blog.description} url={blog.url} />
                )}
            </div>
        </div>
        
        
    )
}

export default BlogList;