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
        tutorials: [
          {
            title: 'World Generation Tutorial',
            meta: 'A tutorial on the facet world generation system',
            link: 'https://github.com/Terasology/TutorialWorldGeneration'
          },
          {
            title: 'World Generation Tutorial',
            meta: 'A tutorial on the facet world generation system',
            link: 'https://github.com/Terasology/TutorialWorldGeneration'
          },
          {
            title: 'World Generation Tutorial',
            meta: 'A tutorial on the facet world generation system',
            link: 'https://github.com/Terasology/TutorialWorldGeneration'
          }
        ]
      },
      {
        step: 2,
        title: 'Modder',
        current: false,
        tutorials: [
          {
            title: 'NUI Tutorial',
            meta: 'A series of tutorials for the NUI interface framework.',
            link: 'https://github.com/Terasology/TutorialNui'
          },
          {
            title: 'World Generation Tutorial',
            meta: 'A tutorial on the facet world generation system',
            link: 'https://github.com/Terasology/TutorialWorldGeneration'
          },
          {
            title: 'World Generation Tutorial',
            meta: 'A tutorial on the facet world generation system',
            link: 'https://github.com/Terasology/TutorialWorldGeneration'
          }
        ]
      },
      {
        step: 3,
        title: 'Developer',
        current: false,
        tutorials: [
          {
            title: 'Snake Tournament Tutorial',
            meta: 'A module coding tutorial based on the classic Snake game',
            link: 'https://github.com/Terasology/SnakeTournament'
          },
          {
            title: 'World Generation Tutorial',
            meta: 'A tutorial on the facet world generation system',
            link: 'https://github.com/Terasology/TutorialWorldGeneration'
          },
          {
            title: 'World Generation Tutorial',
            meta: 'A tutorial on the facet world generation system',
            link: 'https://github.com/Terasology/TutorialWorldGeneration'
          }
        ]
      },
      {
        step: 4,
        title: 'Artist',
        current: false,
        tutorials: [
          {
            title: 'Asset System Tutorial',
            meta: 'Tutorial module for the asset system.',
            link: 'https://github.com/Terasology/TutorialAssetSystem'
          },
          {
            title: 'World Generation Tutorial',
            meta: 'A tutorial on the facet world generation system',
            link: 'https://github.com/Terasology/TutorialWorldGeneration'
          },
          {
            title: 'World Generation Tutorial',
            meta: 'A tutorial on the facet world generation system',
            link: 'https://github.com/Terasology/TutorialWorldGeneration'
          }
        ]
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
