import styles from './Card.module.css'
import { useDispatch } from 'react-redux'
import { uiActions } from '../../Store/ui-Slice';
import { cardDetailActions } from '../../Store/cardDetail-Slice';

const Card = (props) => {

    const dispatch = useDispatch();

    const onClickHandler = () => {
        const document = {
            title: props.title,
            url: props.url
        }
        
        dispatch(uiActions.ShowDetail())
        dispatch(cardDetailActions.SetCurrentDocument(document))
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