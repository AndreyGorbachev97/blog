import React, { Component } from 'react';
import StartPage from '../StartPage/StartPage';
import Card from '../Card/Card';
import { HashRouter, Route, Switch} from 'react-router-dom';


class Routes extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={StartPage} />
                    <Route path="/card" component={Card} />
                </Switch>
            </HashRouter>
        );
    }
}

export default (Routes);