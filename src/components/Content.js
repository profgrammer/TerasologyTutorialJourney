import React, { Component } from 'react'
import Tutorial from './Tutorial';
export class Content extends Component {
    render() {
        return (
            <div>
                <div className="row justify-content-center" style={{margin: '20px auto'}}>
                    <h3>{this.props.destiny.title} - Tutorial Journey</h3>
                </div>
                {this.props.destiny.tutorials.map(tutorial => (
                    <Tutorial tutorial={tutorial} />
                ))}
            </div>
        )
    }
}

// const contentStyle = {
//     padding: '10px',
//     position: 'fixed',
//     top: '0',
//     left: '300px'
// }

export default Content
