import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './compornents/counter'
import Header from './compornents/header'
import Global from './grobalTheme'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Profile from './pages/profile'
import Home from './pages/home'

const App = () => {
    return(
        <React.Fragment>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path={'/'}exact component={Home}/>
                    <Route path={'/button'}exact component={Profile}/>
                </Switch>
            </BrowserRouter>
            <Global />
        </React.Fragment>    
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))