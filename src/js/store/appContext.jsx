import React from 'react';
import getState from './store.js';

export const Context = React.createContext(null);

const Store = (PassedComponent) =>{
    class StoreWrapper extends React.Component{
        constructor(props){
            super(props);
            this.state = getState(this);
        }
        
        componentDidMount() {
            
            // The place to fetch.
            
            fetch("https://api-project-plucodel.c9users.io/api/contacts/")
                .then(response => response.json())
                .then(data => {
                   let {store} = this.state;
                   store.contactList = data;
                   this.setState({store});
                });
            fetch("https://final-project-backend-plucodel.c9users.io/api/providers/")
                .then(response => response.json())
                .then(data => {
                   let {store} = this.state;
                   store.providers = data;
                   this.setState({store});
                });
            
        }
        
        render(){
            return(
                <Context.Provider value={this.state}>
                    <PassedComponent {...this.props} />
                    
                </Context.Provider>
                );
        }
    }
    
    return StoreWrapper;
};

export default Store;


// <PassedComponent {...this.props} />