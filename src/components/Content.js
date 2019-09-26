import React, { Component } from 'react'
import {Tree} from 'react-d3-tree';
// import {data} from '../data/path1';
// import '../timeline';

const data = [
    {
      name: 'Top Level',
      attributes: {
        keyA: 'val A',
        keyB: 'val B',
        keyC: 'val C',
      },
      children: [
        {
          name: 'Level 2: A',
          attributes: {
            keyA: 'val A',
            keyB: 'val B',
            keyC: 'val C',
          },
        },
        {
          name: 'Level 2: B',
        },
      ],
    },
  ];
export class Content extends Component {

    state = {};

    componentDidMount() {
        const dimensions = this.wrapper.getBoundingClientRect();
        this.setState({
        translate: {
            x: dimensions.width / 2 ,
            y: dimensions.height / 2 - 300
        }
        });
    }

    render() {
        return (
            <div>
                <div className="row justify-content-center" style={{margin: '20px auto'}}>
                    <h3>{this.props.destiny.title} - Tutorial Journey</h3>
                </div>
                <div className="wrapper" style={{height: '100vh', width: '100%'}} ref={tc => this.wrapper = tc}>
                    <Tree data={data} translate={this.state.translate} orientation='vertical'></Tree>
                </div>
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
