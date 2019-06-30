import React from 'react';
import { MainPage, CartPage } from '../pages';
import AppHeader from '../app-header';
import { Route, Switch } from 'react-router-dom'
import Background from './food-bg.jpg';


const App = () => {

    const NoMatch = ({ location }) => (
        <div>
            <span>Page not found.</span>
        </div>
    )

    return (
        <div style={{ background: `url(${Background}) center center/cover no-repeat` }} className="app">
            <AppHeader total={50} />
            <Switch>
                <Route path='/' exact component={MainPage} />
                <Route path='/cart' exact component={CartPage} />
                <Route component={NoMatch} />
            </Switch>
        </div>
    )
}

export default App;