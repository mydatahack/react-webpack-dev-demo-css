import React from 'react';
import ReactDom from 'react-dom';
import '../public/css/bootstrap.scss';
import '../public/css/style.scss';

export default class Button extends React.Component {

    constructor(props) {
        super(props)
        this.state = {message:''}
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        if (this.state.message == '') {
            this.setState({message: 'It works!'})
        } else {
            this.setState({message: ''})
        }
    }

    render() {
        return (
            <div>
            <p><input type="button" className="btn btn-danger" value="Click Me!"
                      onClick={this.clickHandler} /></p>
            <p>{this.state.message}</p>
            </div>
        )
    }
}
