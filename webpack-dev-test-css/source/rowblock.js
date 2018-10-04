import React from 'react';
import '../public/css/bootstrap.scss';
import {addPrefix} from './utils.js'

export default class RowBlock extends React.Component {

    render(){
        var className = addPrefix('col', this.props.className)
        return (
            <div className={className}>
                {this.props.children}
            </div>
        )
        
    }
}