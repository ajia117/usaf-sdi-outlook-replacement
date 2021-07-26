import React from "react";

const EmailView = ({email, editFlag}) => {
  if(!email) {
    return (<p>No email to show!</p>)
  }

  if (editFlag !== true) {
    return (
      <div class="col s9">
        <h4>Subject: {email.subject} </h4>
        <p>From: {email.sender}</p>
        <p>To: {email.recipient}</p>
        <p>Date: {email.date}</p>
        <div class="divider"></div>
        <p>{email.message}</p>
      </div>
    )
  } else {
    return (
      <div class="col s9">
      <h1>Edit Mode</h1>
      <form>
        <input type="text" id="sender"></input>
        <button class="btn waves-effect waves-light" type="submit" name="action">Submit
          <i class="material-icons right">send</i>
        </button>
      </form>

      </div>
    )
  }

}

export default EmailView;