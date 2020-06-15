import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './ContactList.css';
import { Button, Col, Row, Form, } from 'react-bootstrap'

export default class ContactForm extends Component {
  constructor() {
    super();

    this.state = {
      name: 'John Doe',
      email: 'john@doe.com',
      phone: '555-555-5555',
      address: '123 John Doe Way',
      city: 'Atlanta',
      state: 'GA',
      zip: 30326,
      favorite: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateState(event, key) {
    this.setState({
      [key]: event.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ 
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: null,
      favorite: false
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.updateContact !== this.props.updateContact && this.props.updateContact.name !== this.state.name) {
      let contact = this.props.updateContact
      this.setState({
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        address: contact.address,
        city: contact.city,
        state: contact.zip,
        zip: contact.zip
      })
    }
  }

  render() {
    return (
      <div className="container">
        <h2>Contact Form</h2>
        <Form onSubmit={ this.handleSubmit } contactFormPopulate={ this.contactToUpdate }>
          <div className="field">
            <label for="name">Name</label>
            <input type="text" name="name" value={ this.state.name } onChange={e => {
              this.updateState(e, 'name');}}></input>
            <label for="email">Email</label>
            <input type="email" name="email" value={ this.state.email } onChange={e => {
              this.updateState(e, 'email');}}></input>
            <label for="phone">Phone Number</label>
            <input type="text" name="phone" value={ this.state.phone } onChange={e => {
              this.updateState(e, 'phone');}}></input>
            <label for="address">Address</label>
            <input type="text" name="address" value={ this.state.address } onChange={e => {
              this.updateState(e, 'address');}}></input>
            <label for="city">City</label>
            <input type="text" name="city" value={ this.state.city } onChange={e => {
              this.updateState(e, 'city');}}></input>
            <label for="state">State</label>
            <input type="text" name="state" value={ this.state.state } onChange={e => {
              this.updateState(e, 'state');}}></input>
            <label for="zip">Zip</label>
            <input type="number" name="zip" value={ this.state.zip } onChange={e => {
              this.updateState(e, 'zip');}}></input>
          </div>
          <Button type="submit" className="btn btn-secondary p-1 m-3">Submit Form</Button>
        </Form>
      </div>
    )
  }
}
