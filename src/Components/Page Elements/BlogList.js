import Card from '../Component Elements/Card'

const BlogList = () => {
    const blogs = [
        {
            id: 1,
            title: 'PostgreSQL Data Analysis',
            description: 'Using SQL Queries on a dataset I imported into PGAdmin, I extract useful stories from the data',
            url: "SQL- 01_01_2020 - 09_11_2021 CDC Covid Deaths Dataset Analysis.pdf",
        },
        {
            id: 2,
            title: 'Consuming a RESTful API',
            description: 'Using a free public API I demonstrate how to consume and display the response data using C#/.Net',
            url: "Consuming a RESTful API.pdf",
        },
        {
            id: 3,
            title: 'Designing API with CRUD Endpoints',
            description: 'I design my own custom API with full CRUD capabilities that stores to a local Postgres Database',
            url: "TodoListAPI Documentation.pdf",
        },
        {
            id: 4,
            title: 'Securing API Endpoints with Json Web Tokens',
            description: 'I extend my existing custom API to secure its endpoints with Json Web Tokens',
            url: "Securing an API with Json Web Tokens and Microsoft.Authorization.pdf",
        },
    ]

    return (
        <div className="container min-vh-100 pt-5, mt-5">
            <text className="text-white text-start py-3 ms-5 fs-3" fontFamily="sonos-logoregular">Documentation of some of my skills and knowledge:</text>
            <div className="row justify-content-center">
                {blogs.map(blog =>
                    <Card key={blog.id} title={blog.title} description={blog.description} url={blog.url} />
                )}
            </div>
        </div>
        
        
    )
}

export default BlogList;