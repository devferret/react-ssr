import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from './components/Routes'

console.log('There is client !')

ReactDOM.hydrate(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
    , document.querySelector('#root')
)