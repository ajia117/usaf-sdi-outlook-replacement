import React from "react";

const user = "jane@galvanize.com"

const EmailView = ({email, editFlag, onSubmit}) => {
  if(!email) {
    return (<p>No email to show!</p>)
  }

  if (editFlag) {
    return (
      <div className="col s9">
        <h4>New Message</h4>
        <p>From: {user}</p>
        <form id="newEmail"
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit({
            sender: user,
            recipient: document.getElementById("recipient").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value
          })}}>
          <label for="recipient">To: </label>
          <input type="text" id="recipient"></input>
          <label for="subject">Subject: </label>
          <input type="text" id="subject"></input>
          <label for="message">Body: </label>
          <textarea className="materialize-textarea" id="message"></textarea>
          <button
            className="btn waves-effect waves-light"
            type="submit">
            Submit
            <i className="material-icons right">send</i>
          </button>
        </form>

      </div>
    )
  } else {
    return (
      <div className="col s9">
        <h4>Subject: {email.subject} </h4>
        <p>From: {email.sender}</p>
        <p>To: {email.recipient}</p>
        <p>Date: {email.date}</p>
        <div className="divider"></div>
        <p>{email.message}</p>
      </div>
    )
  }

}

export default EmailView;