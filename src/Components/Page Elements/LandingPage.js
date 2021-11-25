import classes from "./LandingPage.module.scss"
import Typewriter from 'typewriter-effect'

const LandingPage = () => {

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
                    <p>
                        <span className={classes.heading}>Hello There! My name is Tanner.</span>
                        <p className="fs-2">
                            I'm a
                            <div className={classes.typewriter}>
                                <Typewriter 
                                    options={{
                                        strings: ["Front-End Developer", "Back-End Developer", "Nerd", "Gamer"],
                                        loop: true,
                                        autoStart: true
                                    }}
                                />
                            </div>
                        </p>
                    </p>
                </section>
            </header>
        </div>
    )
}
export default LandingPage;