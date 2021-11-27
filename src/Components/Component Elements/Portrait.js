import portrait from '../../Images/Portrait.jpg'
import styles from './Portrait.module.css'

const Portrait = () => {

    return (
        <div className="my-5">
            <img height="250" src={portrait} alt="..." id={styles.img} />       
        </div>
    )
}

export default Portrait;