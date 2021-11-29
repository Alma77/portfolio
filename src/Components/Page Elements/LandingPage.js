import classes from "./LandingPage.module.scss"
import Typewriter from 'typewriter-effect'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { uiActions } from "../../Store/ui-Slice"
import GithubIcon from "../../Icons/GithubIcon"
import LinkedInIcon from "../../Icons/LinkedInIcon"
import InstagramIcon from "../../Icons/InstagramIcon"
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
                        <span className={classes.heading}>Hello There! My name is Tanner.</span>
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
                        <li className="list-group-item">
                            <a href="https://www.linkedin.com/in/tanner-trimble-36a109186/" target="_blank" rel="noreferrer" ><LinkedInIcon /></a>
                        </li>
                        <li className="list-group-item">
                            <a href="https://www.github.com/Alma77" target="_blank" rel="noreferrer" ><GithubIcon /></a>
                        </li>
                        <li className="list-group-item">
                            <a href="https://www.instagram.com/trimble.tanner77/" target="_blank" rel="noreferrer" ><InstagramIcon /></a>
                        </li>
                    </ul>
                </section>
            </header>
        </div>
    )
}
export default LandingPage;