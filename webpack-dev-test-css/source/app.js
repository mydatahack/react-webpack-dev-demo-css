import React from 'react';
import ReactDom from 'react-dom';
import '../public/css/bootstrap.scss';
import '../public/css/style.scss';

import Headers from './headers.js';
import Container from './container.js';
import Button from './button.js';
import RowBlock from './rowblock.js';
import Row from './row.js'

import ReactCssTransitionGroup from 'react-addons-css-transition-group'

export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {message:'', count:0, buttonArray: []}
        this.clickHandler = this.clickHandler.bind(this)
        this.spawnButtonHandler = this.spawnButtonHandler.bind(this)
        this.reset = this.reset.bind(this)
    }

    clickHandler(){
        if (this.state.message == '') {
            this.setState({message: 'It works!'})
        } else {
            this.setState({message: ''})
        }
    }

    spawnButtonHandler(){
        var newArray = [...this.state.buttonArray, this.state.count]
        this.setState({count: this.state.count + 1, buttonArray: newArray})
    }

    reset(){
        this.setState({count:0, buttonArray:[]})
    }

    render() {

        var elements = this.state.buttonArray.map((item, index) => { 
                        return <Button key={index} label={item} className="-default" />
                    })
        return (
            <div>
            <ReactCssTransitionGroup transitionName='header' 
            transitionAppear={true} transitionAppearTimeout={500} transitionEnter={false} transitionLeave={false}>
            <Headers className="-fluid text-center  header-image">
                <h1>Setting up Dev Environment for React with Webpack 4 and Babel 7</h1>
                <p>Hot Reloading with webpack-dev-server and adding support for ES6</p>
                <Button onClick={this.clickHandler} label="Click Me" className="-primary" />
                <p>{this.state.message}</p>
            </Headers>
            </ReactCssTransitionGroup>
            <Container>
                <Row className="text-center">
                    <RowBlock className="-sm-4 row-highlight">
                        <h3>First Block</h3>
                    </RowBlock>
                    <RowBlock className="-sm-4 row-highlight">
                        <h3>Second Block</h3>
                    </RowBlock>
                    <RowBlock className="-sm-4 row-highlight">
                        <h3>Third Block</h3>
                    </RowBlock>
                </Row>
            </Container>

            <Container>
            <h3 style={{marginBottom:"20px"}}>Animation Example</h3>
            <Row className="text-center">
                    <RowBlock className="-sm-4">
                        <Button label="Spawn Buttons" className="-danger" onClick={this.spawnButtonHandler}/>
                        <p></p>
                        <Button label="Delete Buttons" className="-warning" onClick={this.reset}/>
                    </RowBlock>
                    <RowBlock className="-sm-4">
                    <ReactCssTransitionGroup transitionName='button' transitionAppear={true} 
                    transitionAppearTimeout={500} transitionEnterTimeout={5000} transitionLeaveTimeout={50}>
                        {elements}
                    </ReactCssTransitionGroup>
                    </RowBlock>
                    <RowBlock className="-sm-4">
                        
                    </RowBlock>
                </Row>
            </Container>
            </div>
            
        )
    }
}
