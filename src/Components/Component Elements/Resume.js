import { uiActions } from "../../Store/ui-Slice";
import { useDispatch, useSelector } from "react-redux";
import { Modal} from 'react-bootstrap'
import resume from '../../Documents/Tanner_Trimble_Resume.PDF'

const Resume = () => {
    
    //const [numPages, setNumPages] = useState(1)
    //const [pageNumber, SetPageNumber] = useState(1)

    const dispatch = useDispatch();
    const showResume = useSelector(state => state.ui.showResume);
    
    const onClickHideHandler = () => {
        dispatch(uiActions.HideResume())
    }

    return (
        <Modal show={showResume} onHide={() => onClickHideHandler()} backdrop="static"  size="lg">
            <Modal.Header closeButton>
                <Modal.Title>My Resume</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="min-vh-100">
                    <iframe className="min-vh-100 w-100" title="My Resume" src={resume}></iframe>
                </div>                
            </Modal.Body>
            <Modal.Footer>
                <button type="button" className="btn btn-secondary" onClick={() => onClickHideHandler()}>Hide</button>
            </Modal.Footer>
        </Modal>
    )
}

export default Resume;