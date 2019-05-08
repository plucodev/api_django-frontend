import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import ContactCard from '../components/ContactCard';
import Modal from '../components/Modal';

export default class Contacts extends React.Component {
    constructor(){
        super();
        this.state = {
            showModal: false  
        };
    }
    render() {
        return (
            <div className="container">
                <div>
                    <p className="text-right my-3">
                        <Link className="btn btn-success" to="/add">Add new contact</Link>
                    </p>
                    
                    <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                        <ul className="list-group pull-down" id="contact-list">
                            <ContactCard onDelete={() => this.setState({ showModal: true})} />
                            
                        </ul>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <ul className="list-group">
                            <Context.Consumer>
                                {({ store, actions }) => {
                return store.providers.map((item, index) => {
                    return (
                        <li className="list-group-item" key={index}><span className="text-muted">{item.prov_name}</span><span className="text-muted">{item.id}</span></li>
                                            );
                                        });
                                        }}
                            </Context.Consumer>
                        </ul>
                    </div>
                </div>
                <Modal show={this.state.showModal} onClose={() => this.setState({showModal: false})} />
            </div>
        );
    }
}