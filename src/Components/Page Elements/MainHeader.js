import { uiActions } from "../../Store/ui-Slice";
import { useDispatch } from "react-redux";

const MainHeader = () => {

    const dispatch = useDispatch();

    const ShowResumeHandler = () => {
        dispatch(uiActions.ShowResume());
    }

    return (
        <nav className="fixed-top navbar navbar-expand-lg navbar-dark bg-black shadow">
            <div className="container-fluid">
                <div className="navbar-brand text-white mx-5">
                    <span className="fs-3">Tanner Trimble</span>
                    <span className="fs-6"> Portfolio</span>
                </div>
                <div className="d-flex">
                    <button type="button" className="btn btn-outline-primary" onClick={() => ShowResumeHandler()}>View Resume</button>
                </div>
            </div>            
        </nav>
    )
}

export default MainHeader;