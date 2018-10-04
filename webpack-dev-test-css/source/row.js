import React from 'react';
import '../public/css/bootstrap.scss';
import RowBlock from './row.js'

export default class Row extends React.Component {

    render(){
        const classNameAll = `row ${this.props.className||''}`;
        return <div className={classNameAll}>{this.props.children}</div>
    }
}
