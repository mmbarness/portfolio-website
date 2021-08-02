import React, { useRef, useState } from "react"
import "regenerator-runtime/runtime";
import { pdfjs, Document, Page,} from 'react-pdf/dist/esm/entry.webpack';
// import { Document, Page, } from 'react-pdf';
import '../style/resume.scss'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

export const Resume = props => {

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    const [height, setheight] = useState(window.innerHeight)

    document.addEventListener("click", e => {
        const resumeModal = document.getElementById("resume-modal")
        if (resumeModal.className === "resume-modal-is-open"){
            const clickOutside = !(resumeModal.contains(e.target));
            const resumeBtn = document.getElementById('resume-button')
            if ((resumeModal.className === "resume-modal-is-open") && (clickOutside) && (!resumeBtn.contains(e.target))) {
                props.setresumeModalVisible(!props.setresumeModalVisible)
            }
        }
    })

    const ResumePDF = () => (
        <Document file="https://portfolio-yep.s3.amazonaws.com/Matthew+Barnes-+Resume.pdf" className="resume-pdf">
            <Page pageNumber={1} height={height - 75}/>
        </Document>
    )
        
    return(
        <div id="resume-modal" className={`resume-modal-${props.resumeModalVisible ? "is-open" : "close"}`}>
            <ResumePDF/>
            <a id="resume-dl-link" href="https://portfolio-yep.s3.amazonaws.com/Matthew+Barnes-+Resume.pdf" download="matthew-barnes.pdf" target="_blank">download me</a>
            <span id="close-resume" onClick={() => props.setresumeModalVisible(!props.setresumeModalVisible)}>&times;</span>
        </div>   
    ) 
}