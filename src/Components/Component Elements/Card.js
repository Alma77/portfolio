import styles from './Card.module.css'
import { useDispatch } from 'react-redux'
import { blogPostActions } from '../../Store/blogPost-Slice';
import { useState, useEffect } from 'react';

const Card = (props) => {

    const dispatch = useDispatch();
    const [blogPost, SetBlogPost] = useState('')

    useEffect(() => {
        import(`../../Documents/BlogPost${props.id}/${props.title}.md`)
            .then(res => {
                fetch(res.default)
                .then(res => res.text())
                .then(res => SetBlogPost(res))
            }
        );
    })

    const onClickHandler = () => {
        dispatch(blogPostActions.SetBlogPost(blogPost))
    }

    return (
        <div className="card mx-5 my-3 px-2 col-4" id={styles.card} onClick={() => onClickHandler()}>
            <div className="card-body ms-3">
                <div className={styles.title}>
                    <h5 className="card-title">{props.title}</h5>
                </div>
                <div className={styles.content}>
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;