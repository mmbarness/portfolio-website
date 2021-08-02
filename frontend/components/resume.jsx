import React, { useState } from "react"
import "regenerator-runtime/runtime";
import { pdfjs, Document, Page} from 'react-pdf/dist/esm/entry.webpack';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import '../style/resume.scss'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

export const Resume = props => {

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    const styles = StyleSheet.create({
        page: { backgroundColor: 'tomato' },
        section: { textAlign: 'center', margin: 30 }
    });

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

    return(
        <div id="resume-modal" className={`resume-modal-${props.resumeModalVisible ? "is-open" : "close"}`}>
            <Document file="https://portfolio-yep.s3.amazonaws.com/Matthew+Barnes-+Resume.pdf">
                <Page pageNumber={1} size="A4" style={styles.page}>
                </Page> 
            </Document>
        </div>   
    ) 
}