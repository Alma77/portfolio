import { useSelector } from "react-redux";
import Markdown from "markdown-to-jsx";
import './BlogPost.module.css'

const BlogPost = () =>  {

    const blogPost = useSelector(state => state.blogPost.currentPost)
    console.log(blogPost)
    
    return(
        <div className="p-5 m-5">
            <Markdown>
                {blogPost}
            </Markdown>
        </div>
    )
}

export default BlogPost;