import React, { Component } from 'react';
import SidebarItem from './SidebarItem';

export class Sidebar extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row justify-content-center" style={{margin: '10px auto'}}>
                    <h3>I am a ... </h3>
                </div>
                {this.props.destinyLinks.map(destiny => (
                    <SidebarItem setCurrentDestiny={this.props.setCurrentDestiny} key={destiny.step} destiny={destiny} />
                ))}
            </React.Fragment>
        )
    }
}

// const sidebarStyle = {
//     height: '100%',
//     width: '300px',
//     position: 'fixed',
//     top: '0',
//     left: '0',
//     padding: '10px',
//     borderRight: '1px solid black'
// }

export default Sidebar
