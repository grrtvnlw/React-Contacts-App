import React, { Component } from 'react'

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
            <div className="row">
                <div className="col-md-6">
                    <b>{this.props.contact.name}</b>
                    <div className={innerClass}>
                        email: {this.props.contact.email}
                        <br />
                    phone: {this.props.contact.phone}
                        <br />
                    zip code: {this.props.contact.zip}
                        <br />
                    state: {this.props.contact.state}
                    </div>
                </div>
                <div className="col-md-6 justify-content-right">
                    <button className="btn btn-outline-secondary btn-sm" onClick={this.toggle}>Open</button><button className="btn btn-outline-secondary btn-sm" onClick={this.updateCard}>Update</button><button className="btn btn-outline-secondary btn-sm" onClick={this.deleteContactCard}>X</button>

                </div>
            </div >
        )
    }
}
