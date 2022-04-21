import Portrait from "../Component Elements/Portrait"
import SkillsBanner from "../Component Elements/SkillsBanner"
import SkillDetail from '../Component Elements/SkillDetail'
import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../../Store/ui-Slice'
import styles from './About.module.css'

const Summary = () => {

    const dispatch = useDispatch()
    const showSkill = useSelector(state => state.skillDetail.showSkill)

    useEffect(() => {
        dispatch(uiActions.NotOnLandingPage())
    },[dispatch])

    return(
        <div className="my-5 py-5">
            <section>
                <h1 className="text-center">Who am I?</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 my-5 pe-5">
                            <Portrait />
                        </div>
                        <div className="col-lg-6 my-5 ps-5">
                            <p className={styles.text}>
                                My name is Tanner Trimble. I'm a Software Engineer with an interest in Web-Development.
                                My expertise is in C# and Asp.Net for Back-End. For the Front-End side of things, I use HTML, CSS/SASS, and ReactJS.
                                I am always looking to expand my skill set, and learn new technologies, so I can design and write 
                                beautiful software.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id={styles.Skills}>
                <h1 className="text-center">What are my Skills?</h1>
                <div className="container mt-3">
                    <div>
                        {showSkill && <SkillDetail />}
                    </div>
                    <SkillsBanner />
                </div>
            </section>            
        </div>        
    )
}

export default Summary;