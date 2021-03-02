import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home/home.js'
import Ajuda from './pages/Mensagem/Ajuda'
import Recrutamento from './pages/Mensagem/Recrutamento'

function Routes() {

    const PrivateRoute = (props) => {
        return(localStorage.getItem('token') ? <Route {...props} /> : <Redirect to="/" />)
    }

    return(
        <Switch>
            <Route exact path='/Ordo-Realitas' component={Home}/>
            <PrivateRoute path='/Ajuda' component={Ajuda} />
            <PrivateRoute path='/Recrutamento' component={Recrutamento} />
        </Switch>

    )
}

export default Routes