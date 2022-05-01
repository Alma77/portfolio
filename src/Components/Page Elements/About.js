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
        <div className="py-5">
            <section>
                <h1 className="text-center">Who am I?</h1>
                <Portrait />
                <h3>I'm a Software Engineer with an interest in Web Development</h3>
                <p className={`${styles.text}`}>
                    During my schooling at Snow College in Ephraim, Utah I earned a Bachelor's Degree in Software Engineering with an emphasis
                    on Web Development and developed skills in both Back-End and Front-End Web Development. During this time I found I have a
                    passion for creating beautiful and clean web designs that also facilitate an intuitive user experience. I'm always looking for 
                    new projects and opportunities to help me grow and advance in both my logical and artistic skills.
                </p>
                <p className={`${styles.text}`}>
                    When I'm not coding I enjoy experiencing the beauty the world has to offer through traveling, hiking, and photography. I also like
                    to enjoy the fictional worlds created through the creativity of other people by playing video games, reading books, and watching
                    tv shows. Through these I find inspiration for my own life and goals.
                </p>
            </section>
            <section id={styles.Skills}>
                <h1 className="text-center">What are my Skills?</h1>
                <div className="container">
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