import React from 'react';
import ReactDOM from 'react-dom';
import './scss/core.scss'
import App from './components/App';
import { BrowserRouter } from 'react-router-dom'

class Main extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        )
    }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
