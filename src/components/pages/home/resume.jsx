import React, { useContext, useEffect, useRef, useState } from "react"
import "regenerator-runtime/runtime";
import { pdfjs, Document, Page } from "react-pdf";
import '../../../styles/theme/resume.scss'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { downloadResource } from "../../../utils/fetches";
import PersonContext from "../../../context/person/person-context";

export const Resume = props => {

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    const getWindowDimensions = () => (
        ({"width": window.innerWidth, "height": window.innerHeight})
    )

    const personContext = useContext(PersonContext)
    const {person: {resumeLink}} = personContext
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [pdfDownloadLink, setPdfDownloadLink] = useState(downloadResource(resumeLink))
    const [priorZIndex, setPriorZIndex] = useState(0)

    const asyncSetPDFLink = async () => {
        const link = await downloadResource(resumeLink)
        setPdfDownloadLink(link)
    }

    const handleResize = () => {
        setWindowDimensions(getWindowDimensions())
    }

    useEffect(() => {
        personContext.getPerson()
        asyncSetPDFLink()
    },[])

    useEffect(() => {
        handleResponsiveCanvas()
    }, [setWindowDimensions]);

    window.addEventListener('resize', handleResize);

    document.addEventListener("click", e => {
        const resumeModal = document.getElementById("resume-modal")
        const navBar = document.getElementById("top-nav-div")
        if ((resumeModal) && (resumeModal.className === "resume-modal-is-open")){
            const clickOutside = !(resumeModal.contains(e.target));
            const resumeBtn = document.getElementById('resume-button')
            setPriorZIndex(navBar.style.zIndex)
            navBar.style.zIndex = "0"
            if ((resumeModal.className === "resume-modal-is-open") && (clickOutside) && (!resumeBtn.contains(e.target))) {
                props.setresumeModalVisible(!props.setresumeModalVisible)
                let modalScreen = document.getElementById('modal-screen');
                modalScreen.style.display = "none";
                navBar.style.zIndex = priorZIndex
            }
        }
    })

    const handleResponsiveCanvas = () => {
        const { width, height } = getWindowDimensions();
        const lesserValue = width < height ? width : height;
        const layout = (width / height) > 1 ? "landscape" : "portrait";
        const landscapeDimensions = {width, height};
        if (layout === "portrait") {
            setWindowDimensions({'width': width - 20, 'height': height, 'lesserValue': lesserValue})
        } else {
            setWindowDimensions({
                'width': landscapeDimensions.width, 
                'height': landscapeDimensions.height, 
                'lesserValue': lesserValue * 0.75})
        }
    }
        
    console.log({windowDimensions})

    return(
        <div id="resume-modal" className={`resume-modal-${props.resumeModalVisible ? "is-open" : "close"}`}>
            <Document file={resumeLink} className="resume-pdf">
                <Page pageNumber={1} width={windowDimensions.lesserValue}/>
            </Document>
            <a id="resume-dl-link" href={pdfDownloadLink} download="Matthew Barnes - Resume.pdf">download me</a>
            <span id="close-resume" onClick={() => props.handleResumeModal()}>&times;</span>
        </div>   
    ) 
}