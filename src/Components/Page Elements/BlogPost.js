import Markdown from "markdown-to-jsx";
import { useEffect } from "react";
import styles from './BlogPost.module.css'
import { useDispatch } from "react-redux";
import { uiActions } from '../../Store/ui-Slice'

const BlogPost = () =>  {

    const blogPost = localStorage.getItem("currentPost");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(uiActions.NotOnLandingPage())
    },[dispatch])
    
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