import './App.css';
import React from 'react';
import EmailView from './EmailView';
import EmailList from './EmailList';
import Search from './Search';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      viewId: 0,
      emails: ["empty"],
      editFlag:false
    }
    this.searchEmailsAndRender({ target:{value: ""}});
  }

  selectEmail(id){
    for(let i=0; i<this.state.emails.length; i++) {
      if(this.state.emails[i].id === id) {
        this.setState({
          viewId: i,
          editFlag: false
        });
      }
    }
  }

  enableEdit(){
    this.setState({editFlag: true});
  }
  
  searchEmailsAndRender(event) {
    console.log("search query:", event.target.value)
    const emailRequest = `http://localhost:3001/search?query=${event.target.value}`;
    fetch(emailRequest)
      .then((response) => response.json())
      .then((emails) => {
        this.setState({
          viewId: 0,
          emails: emails
        })
      })
  }

  sendEmail(email) {
    console.log(email);
    console.log(JSON.stringify(email))

    const emailRequest = `http://localhost:3001/send`
    fetch(emailRequest, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(email)
    })
      .then(response => {
        if(response.ok) {
          console.log("POST success: response")
        } else {
          throw new Error(response);
        }
      })
      .catch(err => console.log("POST failure: ", err));
  }

  render (){
    return (
    <div className="App">
      <Search 
        onChange={this.searchEmailsAndRender.bind(this)}
        editClick={this.enableEdit.bind(this)}
      />

      
      <div className="row">

        <div className="col s3 card-panel blue lighten-5">
          <EmailList 
            emails={this.state.emails}
            onClick={this.selectEmail.bind(this)}
          />
        </div>

        <EmailView
          email={this.state.emails[this.state.viewId]}
          editFlag={this.state.editFlag}
          onSubmit={this.sendEmail}
        />

      </div>
    </div>
    ); 
  }
}

export default App;


