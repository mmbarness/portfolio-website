import React from 'react';
import emailjs from 'emailjs-com';
import '../style/email.scss'

export const EmailMe = (props) => {

    document.addEventListener("click", e => {
        const emailModal = document.getElementById("email-modal")
        if (emailModal.className === "email-modal-is-open"){
            const clickOutside = !(emailModal.contains(e.target));
            const emailBtn = document.getElementById('email-button')
            if ((emailModal.className === "email-modal-is-open") && (clickOutside) && (!emailBtn.contains(e.target))) {
                props.setemailModalVisible(!props.setemailModalVisible)
                let modalScreen = document.getElementById('modal-screen');
                modalScreen.style.display = "none";
            }
        }
    })

    const sendEmail = async (e) => {
        e.preventDefault();
        emailjs.sendForm('service_sjnz7oq', 'template_6dj2gbm', e.target, 'user_qq0BsoTqEV0SBv3Iw0Lvk')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
        });
        let btn = document.getElementById('send-email-btn')
        btn.value = 'Sending'
        await new Promise(r => setTimeout(r, 1000));
        btn.value = 'Sent!'
        btn.disabled = true
        btn.style.backgroundColor = 'grey'
        btn.style.pointerEvents = "none"
    }

    return (
        <div id="email-modal" className={`email-modal-${props.emailModalVisible ? "is-open" : "close"}`}>
            <form id="contact-form" onSubmit={sendEmail}>
                <span id="close-email" onClick={() => props.handleEmailModal()}>&times;</span>
                <input type="hidden" name="contact_number" />
                <label className="contact-form-label"><span>(Your) Name:</span>
                    <input type="text" name="user_name" />
                </label>
                <label className="contact-form-label"><span>(Your) Email:</span>
                    <input type="email" name="user_email" />
                </label>
                <label className="contact-form-label"><span>(Your) Message:</span>
                    <textarea id="contact-form-textarea" name="message" />
                </label>
                <input type="submit" value="Send" id="send-email-btn" className="page-button"/>
            </form>
        </div>
  );
}
