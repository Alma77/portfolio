import { useSelector } from 'react-redux'

const SkillDetail = () => {

    const skill = useSelector(state => state.skillDetail.currentSkill)
    
    return (
        <div className="container w-50 p-5">
            <div className="row">
                <div className="col-lg-5">
                    <img src={skill.image} alt={skill.name} width="100%" height="100%" />
                </div>
                <div className="col-lg-7 px-5 mb-2">
                    <div className="fs-3 fw-bolder text-center">
                        {skill.name}
                    </div>
                    <div className="row text-center">
                        <div className="col-lg fs-6">
                            <p>Knowledge</p>
                        </div>
                        <div className="col-lg fs-5">
                            <p>{skill.rating}</p>
                        </div>                         
                    </div>
                    <div className="row">
                        <p className="py-2">Accomplishments</p>
                    </div>
                    <div className="row">
                        <p className="col">{skill.accomplishments}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillDetail;