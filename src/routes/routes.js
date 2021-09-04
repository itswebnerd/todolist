import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../page/Home';
import Login from '../page/Login';

export default function Routes(){
    return (
        <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/home" component={Home}/>
            <Route component={Login}/>
        </Switch>
    )
}