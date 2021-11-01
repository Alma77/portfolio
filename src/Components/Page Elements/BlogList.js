import Card from '../Component Elements/Card'

const BlogList = () => {
    const blogs = [
        {
            id: 1,
            title: 'PostgreSQL Data Analysis',
            description: 'Using SQL Queries on a dataset I imported into PGAdmin, I extract useful stories from the data',
        },
        {
            id: 2,
            title: 'Consuming a RESTful API',
            description: 'Using a free public API I demonstrate how to consume and display the response data using C#/.Net',
        },
        {
            id: 3,
            title: 'Designing API with CRUD Endpoints',
            description: 'I design my own custom API with full CRUD capabilities that stores to a local Postgres Database',
        },
        {
            id: 4,
            title: 'Securing API Endpoints with Json Web Tokens',
            description: 'I extend my existing custom API to secure its endpoints with Json Web Tokens',
        },
    ]

    return (
        <div className="container">
            <div className="row justify-content-center">
                {blogs.map(blog =>
                    <Card key={blog.id} title={blog.title} description={blog.description} />
                )}
            </div>
        </div>
        
        
    )
}

export default BlogList;