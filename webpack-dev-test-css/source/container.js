import React from 'react';
import '../public/css/bootstrap.scss';

export default class Container extends React.Component {

    render() {
        const className = `container${this.props.fluid?'-fluid':''} ${this.props.className || ''}`;
        return <div className={className} style={this.props.style}>
                {this.props.children}
               </div>
    }
}