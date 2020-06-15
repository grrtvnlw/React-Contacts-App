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
            <ul>
              <li className="contactName">{ contact.name }</li>
              <li className="mt-3"><ContactCard contact={ this.props.contactList }/></li>
              {/* <li>{ contact.email }</li>
              <li>{ contact.phone }</li>
              <li>{ contact.address }</li>
              <li>{ contact.city }</li>
              <li>{ contact.state }</li>
              <li>{ contact.zip }</li> */}
            </ul>
          )
          })
        }
      </div>
    )
  }
}
