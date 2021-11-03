import portrait from '../../Images/Portrait.jpg'
import styles from './Portrait.module.css'

const Portrait = () => {

    return (
        <div className="row pt-5">
            <span className="col-4"></span>
            <div className="col-4">
                <img height="250" src={portrait} alt="..." id={styles.img} />
            </div>            
            <span className="col-4"></span>
        </div>
    )
}

export default Portrait;