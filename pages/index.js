import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './container/app';

class Index extends Component {
    componentDidMount(){
        render(<App />, document.getElementById('app'));
    }
    render() {
        return null;
    }
}

export default Index;