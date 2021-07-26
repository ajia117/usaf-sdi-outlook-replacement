import React from "react";

const EmailView = ({email}) => {
  return (
      <div>
    <h1> {email.subject} </h1>
    <p>{email.message}</p>
    </div>
  )
}

export default EmailView;