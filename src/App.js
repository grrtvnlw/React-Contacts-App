import React from 'react';
import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      contacts: []
    }
  }

  onNewContact = (data) => {
    this.setState({
      contacts: this.state.contacts.concat(data)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Contacts App</h1>
        </header>
        <ContactForm onSubmit={ this.onNewContact }/>
        <ContactList contactList={ this.state.contacts }/>
      </div>
    );
  }
}

export default App;
