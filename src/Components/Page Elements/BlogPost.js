import { useSelector } from "react-redux";
import Markdown from "markdown-to-jsx";
import styles from './BlogPost.module.css'

const BlogPost = () =>  {

    const blogPost = (useSelector(state => state.blogPost.currentPost))
    
    return(
        <div className="p-5 m-5 ">
            <Markdown
                options={{
                    overrides: {
                        ul: {
                            props: {
                                className: styles.list
                            }
                        }
                    }
                }}>
                {blogPost}
            </Markdown>
        </div>
    )
}

export default BlogPost;