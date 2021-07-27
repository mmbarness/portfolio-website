import React from 'react';
import emailjs from 'emailjs-com';

export const EmailMe = () => {

    const sendEmail = async (e) => {
        e.preventDefault();
        emailjs.sendForm('service_sjnz7oq', 'template_6dj2gbm', e.target, 'user_qq0BsoTqEV0SBv3Iw0Lvk')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
        });
        await new Promise(r => setTimeout(r, 2000));
    }

    return (
        <form classname="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <label classname="contact-form-label">Name:
                <input type="text" name="user_name" />
            </label>
            <label classname="contact-form-label">(Your) Email:
                <input type="email" name="user_email" />
            </label>
            <label classname="contact-form-label">Message:
                <textarea id="contact-form-textarea" name="message" />
            </label>
            <input type="submit" value="Send" id="send-email-btn"/>
        </form>
  );
}
