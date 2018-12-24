import React, { Component } from 'react';
import Modal from 'react-modal';
import Validation from 'react-validation';
import "../validation.js";

export default class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            modalIsOpen: false,
            name: '',
            email: '',
            msg: '',
            id: 0
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.logChange = this.logChange.bind(this); // We capture the value and change state as user changes the value here.
        this.handleEdit = this.handleEdit.bind(this); // Function where we submit data
    }

    openModal(blogUser) {
        this.setState({
            modalIsOpen: true,
            name: blogUser.name,
            email: blogUser.email,
            id: member.id
        });
    }

    closeModal() {
        this.setState({
            modalIsOpen: false
        });
    }

    logChange(e) {
        this.setState({
            [e.target.name]: e.target.value // Setting value edited by the admin in state.
        });
    }

    handleEdit(event) {
        // Edit functionality
        event.preventDefault()
        var data = {
            name: this.state.name,
            email: this.state.email,
            id: this.state.id
        }
        fetch("/users/edit", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            console.log(data)
            if (data === "success") {
                this.setState({
                    msg: "User has been edited."
                })
            }
        }).catch(function(err) {
            console.log(err)
        });
    }

    componentDidMount() {
        let self = this;
        fetch('/users', {
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            self.setState({
                users: data
            });
        }).catch(err => {
            console.log('caught it!', err);
        })
    }

    render() {
        return (
            <div className="container">
                <div className="panel panel-default p50 uth-panel">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.users.map(blogUser =>
                                <tr key={blogUser.id}>
                                    <td>{blogUser.name}</td>
                                    <td>{blogUser.email}</td>
                                    <td>{blogUser.phone_number}</td>
                                    <td><a onClick={() => this.openModal(member)}>Edit</a>|<a>Delete</a></td>
                                </tr>
                            )}
                            // Modal to edit the user data
                            <Modal
                                isOpen={this.state.modalIsOpen}
                                onRequestClose={this.closeModal}
                                contentLabel="Example Modal">
                            <Validation.components.Form onSubmit={this.handleEdit} method="POST">
                                <label>Name</label>
                                <Validation.components.Input onChange={this.logChange} className="form-control" value={this.state.name} placeholder='John' name='name' validations={['required']}/>
                                <label>Email</label>
                                <Validation.components.Input onChange={this.logChange} className="form-control" value={this.state.email} placeholder='email@email.com' name='email' validations={['required', 'email']}/>
                                <div className="submit-section">
                                <Validation.components.Button className="btn btn-uth-submit">Submit</Validation.components.Button>
                                </div>
                            </Validation.components.Form>
                            </Modal>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}