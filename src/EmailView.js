import React from "react";

const EmailView = ({email}) => {
  if(!email) {
    return (<p>No email to show!</p>)
  }
  return (
    <div class="col s9">
      <h1> {email.subject} </h1>
      <p>{email.sender}</p>
      <p>{email.recipient}</p>
      <p>{email.date}</p>
      <div class="divider"></div>
      <p>{email.message}</p>
    </div>
  )
}

export default EmailView;