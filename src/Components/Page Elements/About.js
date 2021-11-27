import Portrait from "../Component Elements/Portrait";
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { uiActions } from '../../Store/ui-Slice'
import styles from './About.module.css'

const Summary = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(uiActions.NotOnLandingPage())
    },[dispatch])

    return(
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col my-5">
                    <p className={styles.text}>
                        Hello! My name is Tanner Trimble. I'm a Software Engineer with an interest in Web-Development.
                        My expertise is in C# and Asp.Net for Back-End. For the Front-End side of things I use HTML, CSS, and Javascript.
                        I'm young and am eager to expand my skill set and learn new technologies so I can design and write 
                        beautiful software.
                    </p>
                </div>
                <div className="col">
                    <Portrait />
                </div>
            </div>
        </div>        
    )
}

export default Summary;