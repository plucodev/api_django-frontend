import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import PropTypes from 'prop-types';


export default class Contacts extends React.Component {
    render() {
        return (
            
            <div className="container">
                <Context.Consumer>
                    {({ store, actions }) => {
                        return (
                        
                            <div>
                                <h1 className="text-center mt-5">Add a new contact</h1>
                                <form>
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input type="text" name="first_name" className="form-control" placeholder="First Name" />
                                        <label>Last Name</label>
                                        <input type="text" name="last_name" className="form-control" placeholder="Last Name" />
                                    </div>
                                    {/*<div className="form-group">
                                        <label>Gender</label>
                                        <input type="text" name="gender" className="form-control" placeholder="Enter Gender" />
                                    </div>*/}
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" name="email" className="form-control" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input type="phone" name="phone" className="form-control" placeholder="Enter phone" />
                                    </div>
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input type="text" name="address"className="form-control" placeholder="Enter address" />
                                    </div>
                                    <button type="button" className="btn btn-primary form-control" onClick={() => actions.addContact(
                                    document.querySelector("[name=first_name]").value,
                                    document.querySelector("[name=last_name]").value,
                                    document.querySelector("[name=address]").value,
                                    document.querySelector("[name=phone]").value,
                                    document.querySelector("[name=email]").value,
                                    this.props
                                    )}>save</button>
                                    <Link className="mt-3 w-100 text-center" to="/">or get back to contacts</Link>
                                   
                                </form>
                            </div>
                        );
                    }}
                </Context.Consumer>
            </div>
        
        );
    }
}

Contacts.propTypes = {
    history: PropTypes.object
};

                                    //     <div className="form-check form-check-inline">
                                    //     <input className="form-check-input" type="radio" name="inlineRadioOptions" id="male" value="option1"/>
                                    //     <label className="form-check-label" htmlFor="inlineRadio1">M</label>
                                    // </div>
                                    // <div className="form-check form-check-inline">
                                    //     <input className="form-check-input" type="radio" name="inlineRadioOptions" id="female" value="option2"/>
                                    //     <label className="form-check-label" htmlFor="inlineRadio2">F</label>
                                    // </div>