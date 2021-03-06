import styles from "./Timeline.module.scss"
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { useDispatch } from "react-redux";
import { uiActions } from "../../Store/ui-Slice";

const Timeline = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(uiActions.NotOnLandingPage());

        ScrollReveal().reveal('.fadeInLeft', {
            origin: 'left',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });

        ScrollReveal().reveal('.fadeInRight', {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });
    },[dispatch])
      
    return (
        <div>
            <h1 className="my-5 py-5">My Projects</h1>
            <section className={styles.timeline}>
                <div className="container">
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineImg}></div>
                        <div id="fadeInLeft" className={`${styles.timelineContent} ${styles.timelineCard} fadeInLeft`}>
                            <div className={styles.sanpetePantryImgHeader}></div>
                            <div className="date">1 APRIL 2022</div>
                            <p>Worked with the Sanpete County Food Pantry and designed their website. <a target="_blank" rel="noreferrer" className="nav-link" href="https://sanpetepantry.org">Click here to see...</a></p>
                        </div>
                    </div> 

                    <div className={styles.timelineItem}>
                        <div className={styles.timelineImg}></div>
                        <div id="fadeInRight" className={`${styles.timelineContent} ${styles.timelineCard} fadeInRight`}>
                            <div className={styles.squareImgHeader}></div>
                            <div className="date">1 MARCH 2022</div>
                            <p>Figured out how to do online credit card payments and subscription services using Square in C# and Javascript. <a target="_blank" rel="noreferrer" className="nav-link" href="https://square.tannersgallery.duckdns.org">Click here to see...</a></p>
                        </div>
                    </div>      
                </div>
            </section>
            <h1 className="py-5">More Coming Soon...</h1>
        </div>
    )
}

export default Timeline;