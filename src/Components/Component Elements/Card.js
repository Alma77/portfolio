import styles from './Card.module.css'
import { useDispatch } from 'react-redux'
import { cardDetailActions } from '../../Store/cardDetail-Slice'

const Card = (props) => {

    const dispatch = useDispatch();

    const onClickHandler = () => {
        dispatch(cardDetailActions.ToggleShowDetail())
        console.log("Setting current document to: " + props.url)
        dispatch(cardDetailActions.SetCurrentDocument(props.url))
    }

    return (
        <div class="card mx-5 my-3 px-2 col-4" id={styles.card}>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.description}</p>
                <button class="btn btn-primary" onClick={() => onClickHandler()}>See Details</button>
            </div>
        </div>
    )
}

export default Card;