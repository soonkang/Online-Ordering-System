import React, { useState, useRef } from "react";
import "./Location.css";
import $ from "jquery";
import {Notification} from "./Notification.jsx"; // Import the Notification component

function Location() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [showNotification, setShowNotification] = useState(false); // Use a different variable name to avoid conflict
    const formRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = $(formRef.current);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                setShowNotification(true); // Show notification on success
                resetForm();
            },
            error(error) {
                // Handle error
            }
        });
    };

    const resetForm = () => {
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    };

    const closeNotification = () => {
        setShowNotification(false);
    };

    return (
        <div className="container">
            {showNotification && (
                <Notification message="Form submitted successfully!" onClose={closeNotification} />
            )}
            <div className="map-responsive">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.147968824698!2d103.76182414726019!3d1.3027733289574956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1a602ff17c15%3A0xa9545dd23993859e!2sSingapore%20Polytechnic!5e0!3m2!1sen!2ssg!4v1707657931945!5m2!1sen!2ssg"                     width="100%"
                    height="450"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Responsive Google Map"
                ></iframe>
            </div>
            <div className="input-field">
                <form ref={formRef} action="http://localhost:8000/server.php" method="POST" onSubmit={handleSubmit}>
                    <h2>Contact Us</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <input type="text" placeholder="Your name" name="name" required value={name} onChange={(e) => setName(e.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="email" placeholder="Email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="text" placeholder="Subject" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <textarea placeholder="Message" name="message" rows="5" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button type="submit">Send Message</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );
}

export default Location;
