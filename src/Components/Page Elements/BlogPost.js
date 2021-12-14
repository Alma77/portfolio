import { useSelector } from "react-redux";
import { useEffect, useState} from "react";
import Markdown from "markdown-to-jsx";
import styles from './BlogPost.module.css'

const BlogPost = () =>  {

    const [blogPost, SetBlogPost] = useState(useSelector(state => state.blogPost.currentPost))

    // localStorage.setItem('blogPost', blogPost)

    // useEffect(() => {
    //     SetBlogPost(localStorage.getItem('blogPost'))
    // },[blogPost])
    
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