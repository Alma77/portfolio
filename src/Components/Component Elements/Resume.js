//import { useState } from 'react'
import { Document, Page } from 'react-pdf'

const Resume = () => {
    
    //const [numPages, setNumPages] = useState(1)
    //const [pageNumber, SetPageNumber] = useState(1)

    return (
        <div>
            <Document file="./Resume.pdf">
                <Page pageNumber={1} />
            </Document>
        </div>
    )
}

export default Resume;