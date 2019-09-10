import React, { Component } from 'react'
import '../App.css';

export class SidebarItem extends Component {

    sidebarItemStyle = () => {
        return {
            padding: '20px',
            border: '1px solid darkgray',
            borderRadius: '5px',
            margin: '10px 10px'
        }
    }

    

    render() {
        return (
            <div onClick={this.props.setCurrentDestiny.bind(this, this.props.destiny.step)} className="sidebaritem row" style={this.sidebarItemStyle()}>
                {this.props.destiny.step}. {this.props.destiny.title}
            </div>
        )
    }
}

export default SidebarItem
