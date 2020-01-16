// const aux = (props) => props.children;

// export default aux;

import React, { Component } from 'react';

class Aux extends Component {
    componentDidCatch = () => {
        
    }

    render() {
        return (this.props.children);
    }
}

export default Aux;