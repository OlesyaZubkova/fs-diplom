import React, { Component } from 'react';
import ReactDOM from "react-dom/client";

class Demo extends Component {
    render() {
        return (
            <h3>Hello world</h3>
        );
    }
}

export default Demo;

ReactDOM.render(
    <Demo/>,
    document.getElementById('root')
);

