import { uiActions } from "../../Store/ui-Slice";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./MainHeader.module.css"

const MainHeader = () => {

    const dispatch = useDispatch();
    const onLandingPage = useSelector(state => state.ui.onLandingPage)

    const ShowResumeHandler = () => {
        dispatch(uiActions.ShowResume());
    }

    return (
        <nav className="fixed-top navbar navbar-expand-lg navbar-dark bg-transparent">
            <div className="container-fluid">
                <div className="justify-content-start">
                    <button type="button" className="btn btn-outline-light" onClick={() => ShowResumeHandler()}>View Resume</button>
                </div>
                <ul className={styles.nav}>
                    <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogs">
                            Blogs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contactme">
                            Contact Me
                        </NavLink>
                    </li>
                </ul>                
            </div>            
        </nav>
    )
}

export default MainHeader;