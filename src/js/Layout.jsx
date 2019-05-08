import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contacts from "./views/Contacts.jsx";
import AddContact from "./views/AddContact.jsx";
import SingleCard from "./views/SingleCard.jsx";
import EditCard from "./views/EditCard.jsx";
import Store from "./store/appContext.jsx";

export class Layout extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route exact path="/index.html" component={Contacts} />
                            <Route exact path="/" component={Contacts} />
                            <Route exact path="/contacts" component={Contacts} />
                            <Route exact path="/add" component={AddContact} />
                            <Route exact path="/edit/:theid" component={EditCard} />
                            <Route exact path="/single-card/:theid" component={SingleCard} />
                            
                            <Route render={() => <h1 className="notfound">Not found!</h1>} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default Store(Layout);
