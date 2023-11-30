// Contact.js
import React from 'react';
import "../components/Styles.css"

function Contact() {
    return (
        <div>
            <h2>Contact Us</h2>
            <form className='containerForm'>
                <div className="eachOne">

                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input type="text" className="input" id="name" />


                </div>
                <div className="eachOne">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="input" id="email" />
                </div>
                <div className="eachOne">
                    <label htmlFor="message" className="form-label">Mensaje</label>
                    <br></br><textarea className="input" id="message" rows="4"></textarea>
                </div>
                <button type="submit" className="buttonStyle">Submit</button>

            </form>        </div>
    );
}

export default Contact;
