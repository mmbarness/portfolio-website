import React, { useState } from 'react'
import {Formik} from 'formik'
import emailjs from 'emailjs-com'
import './contact-form.scss'

const ContactForm = () => {
    const initialValues = {email: '', message: ''}
    const [emailSent, setemailSent] = useState(false)

    const validateFunc = values => {
        let errors = {}
        if (!values.email) {
            errors.email = 'Email is required!'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Please provide a valid email.';
        }
        if (!values.message) {
            errors.message = 'Please provide a message.'
        }
        if (!emailSent){
            return errors;
        } else {
            return {}
        }
    }

    const onSubmit = async (values, {setSubmitting, setValues}) => {
        let form = document.getElementById('email-contact-form')
        let submitButton = document.getElementById('send-email-btn')
        emailjs.sendForm('service_sjnz7oq', 'template_d0507ef', form, 'user_qq0BsoTqEV0SBv3Iw0Lvk')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
        });
        submitButton.value = 'Sending'
        submitButton.innerText = "Sending";
        await new Promise(r => setTimeout(r, 1000));
        submitButton.value = 'Sent!'
        submitButton.innerText = "Sent!"
        submitButton.disabled = true
        submitButton.style.backgroundColor = 'grey'
        submitButton.style.pointerEvents = "none"
        setSubmitting(false);
        setemailSent(true)
        setValues({email: '', message: ''})
    }
    return (
        <Formik initialValues={initialValues} validate={validateFunc} onSubmit={onSubmit}>
            {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, isValid, setTouched}) => (
                <form className="form" onSubmit={handleSubmit} id="email-contact-form">
                    <input type="hidden" name="contact_number" />

                    <React.Fragment>
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label htmlFor="Email" id="from_email" className="d-flex justify-content-between">
                                    Email
                                    {errors.email && touched.email && (
                                        <span className="text-danger small">{errors.email}</span>
                                    )}
                                </label>
                                <input type="email" name="email" id="email"
                                       className="form-control"
                                       placeholder="e.g. example@example.com"
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.email}/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message" className="d-flex justify-content-between">
                                Message
                                {errors.message && touched.message && (
                                    <span className="text-danger small">{errors.message}</span>
                                )}
                            </label>
                            <textarea className="form-control" name="message" id="message" rows="4"
                                      placeholder="Say something"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.message}/>
                        </div>

                        <div className="d-inline-block position-relative">
                            {!isValid && (
                                <div className="position-absolute w-100 h-100" onMouseOver={() => {setTouched({email: true, message: true})}} />
                            )}
                            <button className="btn btn-primary" id="send-email-btn" type="submit">Send message</button>
                        </div>
                    </React.Fragment>

                </form>

            )}
        </Formik>
    )
}

export default ContactForm
