import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../Store/ui-Slice';
import { Modal } from 'react-bootstrap';

const CardDetail = () => {
    
    const dispatch = useDispatch();
    const document = useSelector(state => state.cardDetail.currentDocument);
    const showDetail = useSelector(state => state.ui.showDetail);

    const onClickHideHandler = () => {
        dispatch(uiActions.HideDetail())
    }

    return (
        <Modal show={showDetail} onHide={() => onClickHideHandler()} backdrop="static" size="lg">
            <Modal.Header closeButton>
                <Modal.Title>{document.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="min-vh-100">
                    <iframe className="min-vh-100 w-100" title={document.title} src={document.url}></iframe>
                </div>                
            </Modal.Body>
            <Modal.Footer>
                <button type="button" className="btn btn-secondary" onClick={() => onClickHideHandler()}>Hide</button>
            </Modal.Footer>
        </Modal>
    )
}

export default CardDetail;