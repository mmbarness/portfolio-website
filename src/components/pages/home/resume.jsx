import React, { useEffect, useState } from "react"
import "regenerator-runtime/runtime";
import { pdfjs, Document, Page } from "react-pdf";
import '../../../styles/theme/resume.scss'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { downloadResource } from "../../../utils/fetches";

export const Resume = props => {

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const [responsiveDimensions, setResponsiveDimensions] = useState(0)

    const getWindowDimensions = () => (
        ({"width": window.innerWidth, "height": window.innerHeight})
    )

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    
    const handleResize = () => {
        setWindowDimensions(getWindowDimensions())
    }

    useEffect(() => {
        handleResponsiveCanvas()
    }, [setWindowDimensions]);

    window.addEventListener('resize', handleResize);

    document.addEventListener("click", e => {
        const resumeModal = document.getElementById("resume-modal")
        if ((resumeModal) && (resumeModal.className === "resume-modal-is-open")){
            const clickOutside = !(resumeModal.contains(e.target));
            const resumeBtn = document.getElementById('resume-button')
            if ((resumeModal.className === "resume-modal-is-open") && (clickOutside) && (!resumeBtn.contains(e.target))) {
                props.setresumeModalVisible(!props.setresumeModalVisible)
                let modalScreen = document.getElementById('modal-screen');
                modalScreen.style.display = "none";
            }
        }
    })

    const handleResponsiveCanvas = () => {
        const { width, height } = getWindowDimensions();
        const lesserValue = width < height ? width : height;
        const layout = (width / height) > 1 ? "landscape" : "portrait";
        if (layout === "portrait") {
            setWindowDimensions({'width': width - 20, 'height': height, 'lesserValue': lesserValue})
        } else {
            setWindowDimensions({'width': width - 200, 'height': height - 200, 'lesserValue': lesserValue - 200})
        }
    }
        
    return(
        <div id="resume-modal" className={`resume-modal-${props.resumeModalVisible ? "is-open" : "close"}`}>
            <Document file="https://portfolio-yep.s3.amazonaws.com/matthew+barnes+-+resume.pdf" className="resume-pdf">
                <Page pageNumber={1} width={windowDimensions.lesserValue}/>
            </Document>
            <a id="resume-dl-link" href={downloadResource()} download="Matthew Barnes-Resume.pdf">download me</a>
            <span id="close-resume" onClick={() => props.handleResumeModal()}>&times;</span>
        </div>   
    ) 
}