import styles from './Card.module.css'

const Card = (props) => {

    return (
        <div class="card mx-5 my-3 px-2 col-4" id={styles.card}>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.description}</p>
                <button class="btn btn-primary">See Details</button>
            </div>
        </div>
    )
}

export default Card;