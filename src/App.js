import React from 'react';
import './App.css';
import Content from './components/Content';
import Sidebar from './components/Sidebar';

class App extends React.Component {

  state = {
    destinies: [
      {
        step: 1,
        title: 'Player',
        current: true,
        data_url: "/src/data/path1.json"
      },
      {
        step: 2,
        title: 'Modder',
        current: false,
        data_url: "/src/data/path1.json"
      },
      {
        step: 3,
        title: 'Developer',
        current: false,
        data_url: "/src/data/path1.json"
      },
      {
        step: 4,
        title: 'Artist',
        current: false,
        data_url: "/src/data/path1.json"
      }
    ]
  }

  getCurrentDestiny = () => {
    return this.state.destinies.filter(t => t.current)[0];
  }

  setCurrentDestiny = (step) => {
    this.setState({
      tutorials: this.state.destinies.map(t => {
        t.current = (t.step === step);
        return t;
      })
    });
  }

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark">
          <span className="navbar-brand mb-0 h1">Terasology - Tutorial Site</span>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <div className="col-3" style={{borderRight: '1px solid lightgray'}}>
              <Sidebar setCurrentDestiny={this.setCurrentDestiny} destinyLinks={this.state.destinies}></Sidebar>
            </div>
            <div className="col-9">
              <Content destiny={this.getCurrentDestiny()}></Content>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

// const sidebarStyle = {
//   height: '100%',
//   width: '300px',
//   position: 'fixed',
//   top: '0',
//   left: '0',
//   padding: '10px',
//   borderRight: '1px solid darkgray'
// }

export default App;
