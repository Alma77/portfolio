import Card from '../Component Elements/Card'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { uiActions } from '../../Store/ui-Slice'


const BlogList = () => {
    const blogs = useSelector(state => state.blogPost.blogPosts)
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