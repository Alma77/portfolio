import { Modal, Button, Spinner } from 'react-bootstrap'
import Loader from "react-loader-spinner";
import styles from './LoadingSpinner.module.css'

const LoadingSpinner = () => {

    return (
        <div className="d-flex justify-content-center bg-transparent">
            <Loader
                type="Oval"
                color="#00BFFF"
                height={100}
                width={100}
            />
        </div>
    )
}

export default LoadingSpinner;