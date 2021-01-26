import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { MainPage } from '../main'

const AppRoute: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={MainPage} />
            </Switch>
        </BrowserRouter>
    )    
}

export default AppRoute