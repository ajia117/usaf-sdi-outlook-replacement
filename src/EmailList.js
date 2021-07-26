import React from "react";

const EmailList = ({emails, onClick}) => {

  return (
    <div>
    {
      emails.map(email => {
        return (
          <div>
            <p onClick={() => onClick(email.id-1)}>
              From: {email.sender}<br/>
              Subj: {email.subject}
            </p>
            <div class="divider"> </div>
          </div>
          );
      })
    }
    </div>
  ); 
} 

export default EmailList;