import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './ContactList.css';
import { Button, Col, Row, Form, } from 'react-bootstrap'

export default class ContactCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    }
  }

    toggle = () => {
      this.setState({ hidden: !this.state.hidden })
    }

    deleteContactCard = () => {
      this.props.delete(this.props.id);
    }

    updateCard = () => {
      this.props.update(this.props.id);
    }

    render() {
      let innerClass = 'd-none';
      if (this.state.hidden === false) {
          innerClass = '';
      }
      return (
        <div>
          <div>
            <b>{this.props.contact.name}</b>
            <ul className={innerClass}>
              <li>email: {this.props.contact.email}</li>
              <li>phone number: {this.props.contact.phone}</li>
              <li>address: {this.props.contact.address}</li>
              <li>city: {this.props.contact.city}</li>
              <li>state: {this.props.contact.state}</li>
              <li className="mb-3">zip code: {this.props.contact.zip}</li>
            </ul>
          </div>
          <div>
            <button className="btn btn-outline-secondary btn-sm" onClick={this.toggle}>Open</button><button className="btn btn-outline-secondary btn-sm" onClick={this.updateCard}>Update</button><button className="btn btn-outline-secondary btn-sm" onClick={this.deleteContactCard}>X</button>
          </div>
        </div >
      )
    }
}
