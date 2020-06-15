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
    return (
      <div>
        <h2>Contact List</h2>
        { this.props.contactList.map((contact, index) => {
          return (
            <ul className="ulBorder">
              <li className="contactName">{ contact.name }</li>
              <li className="mt-3 mb-3"><ContactCard contact={contact} key={index} id={index} delete={this.props.removeContact} update={this.updateContact}/></li>
            </ul>
          )
          })
        }
      </div>
    )
  }
}
