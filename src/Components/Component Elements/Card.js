import styles from './Card.module.css'
import { useDispatch } from 'react-redux'
import { uiActions } from '../../Store/ui-Slice';
import { cardDetailActions } from '../../Store/cardDetail-Slice';

const Card = (props) => {

    const dispatch = useDispatch();

    const onClickHandler = () => {
        dispatch(uiActions.ToggleShowDetail())
        console.log("Setting current document to: " + props.url)
        dispatch(cardDetailActions.SetCurrentDocument(props.url))
    }

    return (
        <div className="card mx-5 my-3 px-2 col-4" id={styles.card}>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <button className="btn btn-primary" onClick={() => onClickHandler()}>See Details</button>
            </div>
        </div>
    )
}

export default Card;