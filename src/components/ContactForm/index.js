import React from "react";
import "./style.css";

function ContactForm() {
    return(
        <form className="form-sizing">
            <div className="form-group">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 mx-auto">
                        <input
                        type="text"
                        name="name"
                        className="form-control form-control-lg"
                        placeholder="Name"
                        id="exampleInputEmail1"
                        />
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 mx-auto">
                        <input
                        type="email"
                        name="name"
                        className="form-control form-control-lg"
                        placeholder="Email"
                        id="exampleInputEmail1"
                        />
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 mx-auto">
                        <input
                        type="text"
                        name="name"
                        className="form-control form-control-lg"
                        placeholder="Subject"
                        id="exampleInputEmail1"
                        />
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 mx-auto">
                        <textarea
                        name="message"
                        className="form-control form-control-lg"
                        placeholder="Write Your Message"
                        id="exampleInputEmail1"
                        rows= "5"
                        />
                    </div>
                </div>
            </div>
            <div className="row text-md-right text-sm-center">
				<div className="col-12 col-sm-12 col-md-6 mx-auto">
					<button
						type="submit"
						className="btn btn-primary mb-2 hidden">
						Submit
					</button>
				</div>
			</div>
        </form>
    );
}

export default ContactForm;