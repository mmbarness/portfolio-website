import React, { useEffect, useState } from "react"
import "regenerator-runtime/runtime";
import { pdfjs, Document, Page,} from 'react-pdf/dist/esm/entry.webpack';
import '../style/resume.scss'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

export const Resume = props => {

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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

    const DownloadResource = async (url = "https://portfolio-yep.s3.amazonaws.com/matthew+barnes+-+resume.pdf", filename = "matthew-barnes-resume.pdf") => {
        let linkElement = document.getElementById('resume-dl-link')
        if (!filename) filename = url.split('\\').pop().split('/').pop();
        let response = await fetch(url, {
            headers: new Headers({
                'Origin': location.origin,
            }),
            mode: 'cors'
            }
        ).then(resp => resp.blob())
        let blobUrl = await window.URL.createObjectURL(response);
        linkElement.href=blobUrl
        return blobUrl
    }

    const [pdfURL, setpdfURL] = useState(DownloadResource())

    const getWindowDimensions = () => {
        const { innerWidth: width, innerHeight: height } = window;
        return ({
            width,
            height
        });
    }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        const handleResize = () => (
            setWindowDimensions(getWindowDimensions())
        )
        window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
    }, []);
        
    return(
        <div id="resume-modal" className={`resume-modal-${props.resumeModalVisible ? "is-open" : "close"}`}>
            <Document file="https://portfolio-yep.s3.amazonaws.com/matthew+barnes+-+resume.pdf" className="resume-pdf">
                <Page pageNumber={1} height={windowDimensions.height - 75}/>
            </Document>
            <a id="resume-dl-link" href={pdfURL} download="Matthew Barnes-Resume.pdf">download me</a>
            <span id="close-resume" onClick={() => props.setresumeModalVisible(!props.setresumeModalVisible)}>&times;</span>
        </div>   
    ) 
}