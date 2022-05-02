import classes from "./LandingPage.module.scss"
import Typewriter from 'typewriter-effect'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { uiActions } from "../../Store/ui-Slice"
import GithubIcon from "../../Icons/HomeGithubIcon"
import LinkedInIcon from "../../Icons/HomeLinkedInIcon"
import InstagramIcon from "../../Icons/HomeInstagramIcon"
import Me from "../../Images/me.png"

const LandingPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(uiActions.IsOnLandingPage())
    },[dispatch])

    return(
        <div className={classes.containerFluid}>
            <div className={classes.background}>
                <div className={classes.cube}></div>
                <div className={classes.cube}></div>
                <div className={classes.cube}></div>
                <div className={classes.cube}></div>
                <div className={classes.cube}></div>
                <div className={classes.cube}></div>
            </div>
            <header>
                <section className={classes.headerContent}>
                    <img src={Me} alt="cartoon" height="100px" width="75px" />
                    <div className={classes.text}>
                        <span className={classes.heading}>Hello There! My name is Tanner Trimble.</span>
                        <div className="fs-2">
                            I'm a
                            <div className={classes.typewriter}>
                                <Typewriter 
                                    options={{
                                        strings: ["Front-End Developer", "Back-End Developer", "Mobile-App Developer", "Freelancer", "Traveler", "Gamer", "Cultural Enthusiast"],
                                        loop: true,
                                        autoStart: true
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <ul className="list-group list-group-horizontal d-flex justify-content-center my-5">
                        <li className={"list-group-item"}>
                            <div className={classes.social}>
                                <a href="https://www.linkedin.com/in/tanner-trimble-36a109186/" target="_blank" rel="noreferrer" ><LinkedInIcon /></a>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className={classes.social}>
                                <a href="https://www.github.com/Alma77" target="_blank" rel="noreferrer" ><GithubIcon /></a>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className={classes.social}>
                                <a href="https://www.instagram.com/trimble.tanner77/" target="_blank" rel="noreferrer" ><InstagramIcon /></a>
                            </div>
                        </li>
                    </ul>
                </section>
            </header>
        </div>
    )
}
export default LandingPage;