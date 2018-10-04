import React from 'react';
import Container from './container.js';
import '../public/css/bootstrap.scss';
import {classify} from './utils.js'

export default class Headers extends React.Component {

    render() {

        const css_name = 'jumbotron';
        const props = Object.assign({}, this.props);
        props.className = classify(css_name, props.className)
        const containerFluid = props.containerFluid;
        delete props.containerFluid;

        const body = props.className.includes(css_name+'-fluid')? <Container fluid={containerFluid}>
        {this.props.children}</Container>: this.props.children;

        return <div {...props}>
                    {body}
                </div>
    }
}