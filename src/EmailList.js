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
        return (
          <EmailListItem
            email={email}
            onClick={onClick}
          />
        )
      })
    }
    </div>
  ); 
} 

const EmailListItem = ({email, onClick}) => {
  let avatarChar = "";
  if(email.sender) {
    avatarChar = email.sender.charAt(0).toUpperCase();
  }
  return (
    <div key={email.id} className="emailListItem">
      <div className="row">
        <div className="col">
          <Avatar className="purple">
            {avatarChar}
          </Avatar>
        </div>
        <p className="col" onClick={() => onClick(email.id)}>
          Subj: {email.subject} <br/>
          From: {email.sender}
        </p>
      </div>
      <div className="divider"> </div>
    </div>
    );

}

export default EmailList;