import React, { Component } from 'react'

export class Tutorial extends Component {
    render() {
        return (
            <a className="tutorial" style={tutorialStyle} href={this.props.tutorial.link} target="_blank" rel="noopener noreferrer">
                <h5>{this.props.tutorial.title}</h5>
                {this.props.tutorial.meta}
            </a>
        )
    }
}

const tutorialStyle = {
    color: 'black',
    textDecoration: 'none',
    display: 'block',
    padding: '15px',
    border: '1px solid lightgray',
    borderRadius: '5px',
    marginBottom: '20px'
}

export default Tutorial
