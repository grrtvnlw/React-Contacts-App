import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      contacts: [],
      editMe: []
    }
  }

  onNewContact = (data) => {
    this.setState({
      contacts: this.state.contacts.concat(data)
    })
  }

  removeElement = (index) => {
    const filteredArray = this.state.contacts.filter((_, i) => i !== index);
    this.setState({
      contacts: filteredArray
    })
  }

  updateElement = (index) => {
    const editMe = this.state.contacts[index];
    this.removeElement(index)
    this.setState({
      editMe: editMe
    })
  }

  toggle = (index) => {
    let newContacts = [...this.state.contacts];
    newContacts[index].favorite = !newContacts[index].favorite;
    this.setState({ 
      contacts: newContacts,
    })
  }

  favorites = () => {
    const filteredArray = this.state.contacts.filter((contact) => contact.favorite === true);
    this.setState({
      contacts: filteredArray
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Contacts App</h1>
        </header>
        <ContactForm onSubmit={ this.onNewContact } updateContact={ this.state.editMe }/>
        <ContactList contactList={ this.state.contacts } removeContact={ this.removeElement } updateContact={ this.updateElement } handleFavorite={ this.toggle } renderFavorites={ this.favorites }/>
      </div>
    );
  }
}

export default App;
