import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './ContactList.css';
import ContactCard from './ContactCard';
import { Button, Col, Row } from 'react-bootstrap'

export default class ContactList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayFavorite: false,
      search: ''
    }
  }

  toggle = () => {
    this.setState({ displayFavorite: !this.state.displayFavorite })
  }

  searchChange = (e) => {
    let searchResults = this.props.contactList.filter(contact => {
      return contact.name.includes(e.target.value)
    })
    this.setState({
      search: e.target.value,
      searchResults: searchResults
    })
  }

  searchResults = (e) => {
    e.preventDefault();
    this.setState({
      search: ''
    })
  }

  render() {
    this.props.contactList.sort((a, b) => a.name.localeCompare(b.name))

    let filteredArray = this.props.contactList.filter((contact) => contact.favorite === true)
    
    return (
      <div className="mb-5">
        <header className="favorites">
          <h2>Contact List</h2><button className="btn btn-primary p-1 ml-2 mt-3" onClick={ this.toggle }>{ this.state.displayFavorite ? 'All' : 'Favorites'}</button>
          <div className="search">
            <form onSubmit={this.searchResults}>
              <label for="search">Search for a contact</label>
              <input type="text" name="search" placeholder="Search" value={this.state.search} onChange={this.searchChange}></input>
              <button type="submit">Search</button>
            </form>
          </div>
        </header>
        { (this.state.search === '') && (this.state.displayFavorite 
        ? filteredArray.map((contact, index) => {
            return (
              <ul className="ulBorder" key={index}>
                <li className="contactName">{ contact.name } { contact.favorite ? <span className="favoriteMe" onClick={ () => this.props.handleFavorite(index) }>⭐️</span> : <span className="favoriteMe" onClick={ () => this.props.handleFavorite(index) }>✩</span> }</li>
                <li>{contact.city}, {contact.state}</li>
                <li className="mt-3 mb-3"><ContactCard contact={contact} key={index} id={index} delete={this.props.removeContact} update={this.props.updateContact}/></li>
              </ul>
            )
          })
        : this.props.contactList.map((contact, index) => {
          return (
            <ul className="ulBorder" key={index}>
              <li className="contactName">{ contact.name } { contact.favorite ? <span className="favoriteMe" onClick={ () => this.props.handleFavorite(index) }>⭐️</span> : <span className="favoriteMe" onClick={ () => this.props.handleFavorite(index) }>✩</span> }</li>
              <li>{contact.city}, {contact.state}</li>
              <li className="mt-3 mb-3"><ContactCard contact={contact} key={index} id={index} delete={this.props.removeContact} update={this.props.updateContact}/></li>
            </ul>
          )
          }))
        }
        { this.state.search !== '' && this.state.searchResults.map((contact, index) => {
            return (
              <ul className="ulBorder" key={index}>
                <li className="contactName">{ contact.name } { contact.favorite ? <span className="favoriteMe" onClick={ () => this.props.handleFavorite(index) }>⭐️</span> : <span className="favoriteMe" onClick={ () => this.props.handleFavorite(index) }>✩</span> }</li>
                <li>{contact.city}, {contact.state}</li>
                <li className="mt-3 mb-3"><ContactCard contact={contact} key={index} id={index} delete={this.props.removeContact} update={this.props.updateContact}/></li>
              </ul>
            )
          }) 
        }
      </div>
    )
  }
}
