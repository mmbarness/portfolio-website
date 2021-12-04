export const downloadResource = async (url = "https://portfolio-yep.s3.amazonaws.com/matthew+barnes+-+resume.pdf", filename = "matthew-barnes-resume.pdf") => {
    const linkElement = document.getElementById('resume-dl-link')
    if (!filename) filename = url.split('\\').pop().split('/').pop();
    const response = await fetch(url, {
        headers: new Headers({
            'Origin': window.location.origin,
        }),
        mode: 'cors'
        }
    ).then(resp => resp.blob())
    const blobUrl = await window.URL.createObjectURL(response);
    if (linkElement) {linkElement.href= blobUrl}
    return blobUrl
}