import React from 'react'

function Contact() {
    return (
        <div id="main-container" className="container">
            {/*Section heading*/}
            <h1 style={{ textAlign: 'center' }}>Contact us</h1>
            {/*Section description*/}
            <p className="text-center w-responsive mx-auto mb-5">Please send me an email with any questions or requests!</p>
            <div className="row">
                {/*Grid column*/}
                <div className="col-md-9 mb-md-0 mb-5 mx-auto form p-4">
                    <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                        {/*Grid row*/}
                        <div className="row">
                            {/*Grid column*/}
                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <input type="text" id="name" name="name" className="form-control" />
                                    <label htmlFor="name" className>Your name</label>
                                </div>
                            </div>
                            {/*Grid column*/}
                            {/*Grid column*/}
                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <input type="text" id="email" name="email" className="form-control" />
                                    <label htmlFor="email" className>Your email</label>
                                </div>
                            </div>
                            {/*Grid column*/}
                        </div>
                        {/*Grid row*/}
                        {/*Grid row*/}
                        <div className="row">
                            <div className="col-md-12">
                                <div className="md-form mb-0">
                                    <input type="text" id="subject" name="subject" className="form-control" />
                                    <label htmlFor="subject" className>Subject</label>
                                </div>
                            </div>
                        </div>
                        {/*Grid row*/}
                        {/*Grid row*/}
                        <div className="row">
                            {/*Grid column*/}
                            <div className="col-md-12">
                                <div className="md-form">
                                    <textarea type="text" id="message" name="message" rows={2} className="form-control md-textarea" defaultValue={""} />
                                    <label htmlFor="message">Your message</label>
                                </div>
                            </div>
                        </div>
                        {/*Grid row*/}
                    </form>
                    <div className="text-center text-md-left">
                        <h1>Button Here</h1>
                    </div>
                    <div className="status" />
                </div>
            </div>
        </div>

    )
}

export default Contact;
