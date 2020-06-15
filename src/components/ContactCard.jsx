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
            <ul className={innerClass}>
              <li><b>email:</b> {this.props.contact.email}</li>
              <li><b>phone number:</b> {this.props.contact.phone}</li>
              <li><b>address</b> {this.props.contact.address}</li>
              <li><b>city:</b> {this.props.contact.city}</li>
              <li><b>state:</b> {this.props.contact.state}</li>
              <li className="mb-3"><b>zip code:</b> {this.props.contact.zip}</li>
            </ul>
          </div>
          <div className="center">
            <button className="btn btn-outline-secondary btn-sm" onClick={this.toggle}>Open</button>
            <button className="btn btn-outline-secondary btn-sm" onClick={this.updateCard}>Update</button>
            <button className="btn btn-outline-secondary btn-sm" onClick={this.deleteContactCard}>X</button>
          </div>
        </div >
      )
    }
}
