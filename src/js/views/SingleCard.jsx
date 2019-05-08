import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ContactCard from '../components/ContactCard';
import Modal from '../components/Modal';
import { Context } from "../store/appContext.jsx";

export default class SingleCard extends React.Component {
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
        return (
            <div className="card single-card mt-5 py-4 col-lg-6">
                <form>
                    <div className="form-group">
                        <img src={store.contactList[this.props.match.params.theid].image} alt={
            store.contactList[
                this.props.match.params.theid
            ].name} className="rounded-circle mx-auto d-block img-fluid" />
                    </div>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" name="full_name" className="form-control" placeholder="Full Name" defaultValue={
            store.contactList[
                this.props.match.params.theid
            ].full_name} readOnly/>
                    </div>
                    <div className="form-group">
                        <label>Gender</label>
                        <input type="text" name="gender" className="form-control" placeholder="Enter Gender" defaultValue={
            store.contactList[
                this.props.match.params.theid
            ].gender} readOnly/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" className="form-control" placeholder="Enter email" defaultValue={
            store.contactList[
                this.props.match.params.theid
            ].email} readOnly/>
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="phone" name="phone" className="form-control" placeholder="Enter phone" defaultValue={
            store.contactList[
                this.props.match.params.theid
            ].phone} readOnly/>
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" name="address"className="form-control" placeholder="Enter address" defaultValue={
            store.contactList[
                this.props.match.params.theid
            ].address} readOnly/>
                    </div>
                    <div className="form-group">
                        <Link className="btn btn-info col-12" to={"/edit/" + this.props.match.params.theid}>Edit Profile</Link>
                    </div>
                    <div className="form-group">
                        <Link className="mt-3 w-100 text-center mb-2" to="/">or get back to contacts</Link>
                    </div>
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

SingleCard.propTypes = {
	match: PropTypes.object
};