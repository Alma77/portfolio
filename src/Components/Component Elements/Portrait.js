import portrait from '../../Images/Portrait.jpg'
import styles from './Portrait.module.css'

const Portrait = () => {

    return (
        <div>
            <img height="100%" width="100%" src={portrait} alt="..." id={styles.img} />       
        </div>
    )
}

export default Portrait;