import React from 'react';
import emailjs from 'emailjs-com';
import '../style/email.scss'

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
        <form id="contact-form" onSubmit={sendEmail}>
            <h3 id="contact-header">email me!</h3>
            <input type="hidden" name="contact_number" />
            <label className="contact-form-label"><span>Name:</span>
                <input type="text" name="user_name" />
            </label>
            <label className="contact-form-label"><span>(Your) Email:</span>
                <input type="email" name="user_email" />
            </label>
            <label className="contact-form-label"><span>Message:</span>
                <textarea id="contact-form-textarea" name="message" />
            </label>
            <input type="submit" value="Send" id="send-email-btn"/>
        </form>
  );
}
