import React from 'react';
import { render } from 'react-dom';

const $ = jQuery;

import ErrorBoundary from './components/ErrorBoundary';
import Stupid from './components/Stupid';
import Smart from './components/Smart';
import Lists from './components/Lists';
import Nav from './components/Nav';

class App extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <p><small>(This is the main React app rendered in <code>#app</code></small></p>
                <Stupid />
                <ErrorBoundary>
                    <Smart />
                    <Lists />
                </ErrorBoundary>
            </div>
        );
    }
}

$(document).ready(() => {
    let app = document.getElementById('app');

    if (app) {
        render(<App />, app);
    }
});
