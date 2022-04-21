import { uiActions } from "../../Store/ui-Slice";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./MainHeader.module.css"
import { Navbar, Nav} from "react-bootstrap";

const MainHeader = () => {

    const dispatch = useDispatch();
    const onLandingPage = useSelector(state => state.ui.onLandingPage)

    const ShowResumeHandler = () => {
        dispatch(uiActions.ShowResume());
    }

    const navbarBG = ( onLandingPage
        ? "transparent"
        : ""
    )

    return (
        <div className="container-fluid">
            <Navbar expand="lg" bg={navbarBG} fixed="top" className={styles.navbar}>
                <div>
                    <button type="button" className="btn btn-outline-light" onClick={() => ShowResumeHandler()}>View Resume</button>
                </div>
                <Navbar.Toggle aria-controls="main-navbar" className="" />
                <Navbar.Collapse id="main-navbar">
                    <Nav className="ms-auto">
                        <span>
                            <ul className={styles.nav}>
                                <li>
                                    <NavLink to="/">
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about">
                                        About Me
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/blogs">
                                        Blogs
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/myprojects">
                                        My Projects
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contactme">
                                        Contact Me
                                    </NavLink>
                                </li>
                            </ul>                
                        </span>
                    </Nav>
                </Navbar.Collapse>          
            </Navbar>
        </div>
    )
}

export default MainHeader;