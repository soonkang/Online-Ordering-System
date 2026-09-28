import React from "react";

function Notification({ message, onClose }) {
    return (
        <div className="notification">
            <p>{message}</p>
            <button onClick={onClose}>Close</button>
        </div>
    );
}

export {Notification}
