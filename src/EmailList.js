import React from "react";
import Avatar from "@material-ui/core/Avatar";

const EmailList = ({emails, onClick}) => {
  if(emails.length === 0) {
    return (<p>No emails to show</p>);
  }

  return (
    <div>
    {
      emails.map(email => {
        let avatarChar = "D";
        if(email.sender) {
          avatarChar = email.sender.charAt(0).toUpperCase();
        }
        return (
          <div>
            <Avatar className="purple">
              {avatarChar}
            </Avatar>
            <p onClick={() => onClick(email.id)}>
              Subj: {email.subject} <br/>
              From: {email.sender}
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