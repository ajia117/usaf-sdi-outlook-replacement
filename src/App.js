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
    this.searchEmailsAndRender("");
  }

  selectEmail(id){
    for(let i=0; i<this.state.emails.length; i++) {
      if(this.state.emails[i].id === id) {
        this.setState({viewId: i});
        this.setState({editFlag: false})
      }
    }
  }

  enableEdit(){
    this.setState({editFlag: true});
  }
  
  searchEmailsAndRender(query) {
    console.log("search query:", query)
    const emailRequest = `http://localhost:3001/search?query=${query}`;
    fetch(emailRequest)
      .then((response) => response.json())
      .then((emails) => {
        this.setState({
          viewId: 0,
          emails: emails
        })
      })

  }

  render (){
    return (
    <div className="App">
      <Search 
        onChange={this.searchEmailsAndRender.bind(this)}
        onClick={this.enableEdit.bind(this)}
      />

      
      <div class="row">

        <div class="col s3 card-panel blue lighten-5">
          <button class="waves-effect waves-light btn-small">
            <i class="material-icons right">email</i>Inbox
          </button>
          <button href="#" class="waves-effect waves-light btn-small">
            <i class="material-icons right">send</i>Sent
          </button>
          <div>
          <EmailList 
            emails={this.state.emails}
            onClick={this.selectEmail.bind(this)}
          />
          </div>
        </div>

        <EmailView
          email={this.state.emails[this.state.viewId]}
          editFlag={this.state.editFlag}
        />

      </div>
    </div>
    ); 
  }
}

export default App;


