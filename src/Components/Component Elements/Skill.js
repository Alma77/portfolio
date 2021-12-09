import { skillDetailActions } from "../../Store/skillDetail-Slice";
import { useDispatch } from 'react-redux'
import styles from './Skill.module.css' 

const Skill = ({ skill }) => {

    const dispatch = useDispatch()

    const onClickHandler = () => {
        const newSkill = {
            name: skill.name,
            image: skill.image,
            rating: skill.rating,
            accomplishments: skill.accomplishments
        }

        dispatch(skillDetailActions.ToggleSkill(newSkill))
        dispatch(skillDetailActions.SetCurrentSkill(newSkill))
    }

    return (
        <div className={styles.skill}>
            <li className="list-group-item">
                <img src={skill.image} alt={skill.name} height="50px" width="50px" onClick={() => onClickHandler()}/>
            </li>
        </div>
    )
}

export default Skill;