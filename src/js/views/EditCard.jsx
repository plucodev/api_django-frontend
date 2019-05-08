import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Modal from '../components/Modal';
import { Context } from "../store/appContext.jsx";

export default class EditCard extends React.Component {
    constructor(){
        super();
        this.state = {
            showModal: false  
        };
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Context.Consumer>
                        {({ store, actions }) => {
                        let index = this.props.match.params.theid;
                    
                        
        return (
            <div className="card col-lg-6 mt-5 py-4">
                <form>
                    <div className="form-group">
                        <img src={store.contactList[this.props.match.params.theid].image} alt={
            store.contactList[
                this.props.match.params.theid
            ].name} className="rounded-circle mx-auto d-block img-fluid" />
                    </div>
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" name="first_name" className="form-control" placeholder="First Name" defaultValue={
            store.contactList[
                this.props.match.params.theid
            ].first_name} />
                        <label>Last Name</label>
                        <input type="text" name="last_name" className="form-control" placeholder="Last Name" defaultValue={
            store.contactList[
                this.props.match.params.theid
            ].last_name} />
                    </div>
                    <div className="form-group">
                        <label>ID</label>
                        <input type="text" name="id" className="form-control" placeholder="Enter Gender" defaultValue={
            store.contactList[
                this.props.match.params.theid
            ].id}/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" className="form-control" placeholder="Enter email" defaultValue={
            store.contactList[
                this.props.match.params.theid
            ].email}/>
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="phone" name="phone" className="form-control" placeholder="Enter phone" defaultValue={
            store.contactList[
                this.props.match.params.theid
            ].phone}/>
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" name="address"className="form-control" placeholder="Enter address" defaultValue={
            store.contactList[
                this.props.match.params.theid
            ].address}/>
                    </div>
                    <button type="button" className="btn btn-primary form-control" onClick={() => actions.updateContact(
                        index,
                        document.querySelector("[name=first_name").value,
                        document.querySelector("[name=last_name").value,
                        document.querySelector("[name=address").value,
                        document.querySelector("[name=phone").value,
                        document.querySelector("[name=email").value,
                        document.querySelector("[name=id").value,
                        this.props
                        )}>Update Contact</button>
                    <Link className="mt-3 w-100 text-center" to="/">or get back to contacts</Link>
                </form>
            </div>
        );
	}}
                    </Context.Consumer>
                    
                </div>
                <Modal show={this.state.showModal} onClose={() => this.setState({showModal: false})} />
            </div>
        );
    }
}

EditCard.propTypes = {
	match: PropTypes.object
};