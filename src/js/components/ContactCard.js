import React from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Context } from "../store/appContext.jsx";
import { Link } from "react-router-dom";


class ContactCard extends React.Component{
    constructor(){
        super();
        this.state = {
            // initialize your state
        };
    }
    
    render(){
        return (
            <div className="container">
                <ul className="list-group">
                    <Context.Consumer>
                        {({ store, actions }) => {
	return store.contactList.map((item, index) => {
		return (
    <li className="list-group-item"
    key={index}>
    
        <div className="row w-100">
            <div className="col-12 col-sm-6 col-md-3 px-0">
                <img src="http://demos.themes.guide/bodeo/assets/images/users/m100.jpg" alt="Mike Anamendolla" className="rounded-circle mx-auto d-block img-fluid" />
            </div>
            <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                <div className=" float-right">
                    <Link to={"/edit/" + index}><button className="btn" ><i className="fas fa-pencil-alt mr-3"></i></button></Link>
                    <button className="btn" onClick={() => actions.deleteContact(item.id)}><i className="fas fa-trash-alt"></i></button>
                </div>
                {/*<Link to={"/single-card/" + index}><label className="name lead" style={{ cursor: "pointer"}}>{item.first_name}</label></Link>*/}
                <span className="text-muted">{item.first_name + " "}</span>
                <span className="text-muted">{item.last_name}</span>
                <br /> 
                <i className="fas fa-map-marker-alt text-muted mr-3"></i>
                <span className="text-muted">{item.address}</span>
                <br />
                <span className="fa fa-phone fa-fw text-muted mr-3" data-toggle="tooltip" title="" data-original-title="(870) 288-4149"></span>
                <span className="text-muted small">{item.phone}</span>
                <br />
                <span className="fa fa-envelope fa-fw text-muted mr-3" data-toggle="tooltip" data-original-title="" title=""></span>
                <span className="text-muted small text-truncate">{item.email}</span>
                <br />
                <span className="fa fa-envelope fa-fw text-muted mr-3" data-toggle="tooltip" data-original-title="" title=""></span>
                <span className="text-muted small text-truncate">{item.id}</span>
                
            </div>
        </div>
    </li>
    );
    });
}}
                    </Context.Consumer>
                </ul>
            </div>
        );
    }
    
}

/**
 * Define the data-types for
 * your component's properties
**/
ContactCard.propTypes = {
    history: PropTypes.object,
    onDelete: PropTypes.func
};

/**
 * Define the default values for
 * your component's properties
**/
ContactCard.defaultProps = {
  onDelete: null
};
export default withRouter(ContactCard);