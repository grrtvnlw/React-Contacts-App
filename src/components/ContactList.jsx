import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './ContactList.css';
import ContactCard from './ContactCard';
import { Button, Col, Row } from 'react-bootstrap'

export default class ContactList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    { this.props.contactList.sort((a, b) => a.name.localeCompare(b.name))}
    return (
      <div className="mb-5">
        <header className="favorites">
          <h2>Contact List</h2><button className="btn btn-primary p-1 ml-2 mt-3">Favorites</button>
        </header>
        { this.props.contactList.map((contact, index) => {
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
