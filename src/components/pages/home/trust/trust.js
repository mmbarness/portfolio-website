import React, {useContext, useEffect} from 'react'
import TrustContext from "../../../../context/trust/trust-context"

const Trust = ({trust}) => {
    const trustContext = useContext(TrustContext)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        trustContext.getTrust()
    }, [])
    const {trust: {logos, testimonials}, loading} = trustContext
    if (loading) return <p>Loading...</p>

    return (
        <div className="they-trust py-5 py-lg-6">
            <div className="container">

                <h2>They are trust me</h2>

                <div className="row align-items-center mb-5">
                    {logos && logos.map((logo, key) => (
                        <div className="col-4 col-md-3 col-lg-2 mb-4" key={key}>
                            <img src={logo} alt="" className="img-fluid opacity-5" width="120px"/>
                        </div>
                    ))}

                </div>

                <div className="row">
                    {testimonials && testimonials.map(testimonial => (
                        <div className="col-md-6 mb-4-nl" key={testimonial.id}>
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={testimonial.img} alt="" className="img-fluid mb-3"/>
                                </div>
                                <div className="col-md-8">
                                    <h5>{testimonial.name}</h5>
                                    <p className="text-muted">{testimonial.company}, {testimonial.position}</p>
                                    <p className="col-lg-11 pl-0">{testimonial.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>

    )
}

export default Trust
