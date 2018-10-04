import React from 'react';
import {classify} from './utils.js';

export default class Button extends React.Component {

    render() {
        const Tag = this.props.href? 'a':'button';
        const className = classify('btn', this.props.className) + (this.props.disabled? ' disabled':'');

        return <Tag {...this.props} className={className}>{this.props.label}</Tag>
    }
}