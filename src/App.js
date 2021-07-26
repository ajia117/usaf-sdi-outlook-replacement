import './App.css';
import React from 'react';
import EmailView from './EmailView';
import EmailList from './EmailList';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      viewId: 0,
      emails:["empty until loaded"]
    }
    this.getEmails((emailArr) => {
      this.setState({emails: emailArr});
    });
  }

  getEmail(id, callback) {
    const emailRequest = `http://localhost:3001/emails/${id}`;
    fetch(emailRequest, {
      method: "GET",
      headers: { Accept: "application/json" }
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("request complete: ", json);
        callback(json);
      })
  }

  getEmails(callback) {
    const emailRequest = `http://localhost:3001/emails`;
    fetch(emailRequest)
      .then((response) => response.json())
      .then((emails) => {
        callback(emails)
      })
  }

  selectEmail(id){
    this.setState({viewId: id})
  }

  render (){
    return (
    <div className="App">
      <header>Search Bar </header>

      
      <div class="row">

        <div class="col s3 card-panel blue lighten-5">
        <a class="waves-effect waves-light btn-small"><i class="material-icons right">cloud</i>button</a>
        <a class="waves-effect waves-light btn-small"><i class="material-icons right">cloud</i>button</a>
          <EmailList 
            emails={this.state.emails}
            onClick={this.selectEmail.bind(this)}
          />

          
        </div>

        <div class="col s9">
          <EmailView
            email={this.state.emails[this.state.viewId]}
          />
        </div>

      </div>
    </div>
    ); 
  }
}

export default App;


