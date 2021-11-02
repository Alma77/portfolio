import { Document, Page } from 'react-pdf'
import { useDispatch, useSelector } from 'react-redux';
import { cardDetailActions } from '../../Store/cardDetail-Slice';
import { useState } from 'react'

const CardDetail = () => {
    
    const dispatch = useDispatch();
    const pageNumber = useSelector(state => state.cardDetail.pageNumber);
    const [numPages, setNumPages] = useState(0);
    const document = useSelector(state => state.cardDetail.currentDocument);

    const onDocumentLoadSuccess = () => {
        dispatch(cardDetailActions.SetNumPages(numPages));
        setNumPages(numPages)
    }

    const onDocumentLoadFailure = () => {
        console.log("Cannot Load: " + document)
    }

    const onClickNextHandler = () => {
        dispatch(cardDetailActions.SetPageNumber(pageNumber+1))
    }

    const onClickPreviousHandler = () => {
        dispatch(cardDetailActions.SetPageNumber(pageNumber-1))
    }

    return (
        <div>
            <div className="modal fade" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <Document file={document} onLoadSuccess={() => onDocumentLoadSuccess()} onLoadError={() => onDocumentLoadFailure()}>
                                <Page pageNumber={pageNumber} />
                            </Document>
                            <p>Page {pageNumber} of {numPages}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={onClickPreviousHandler}>Previous</button>
                            <button type="button" className="btn btn-secondary" onClick={onClickNextHandler}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDetail;