import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Generation from './components/Generation.jsx';
require('bootstrap');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      pokemon: [],
      listedPokes: [],
      selectedPoke: [
        {
          id: 0,
          name: 'default',
          hp: 0,
          atk: 0,
          def: 0,
          spa: 0,
          spd: 0,
          spe: 0,
          total: 0,
          type_1: 'default',
          type_2: 'default',
          ability_1: 'default',
          ability_2: 'default',
          hidden: 'default'
        }
      ],
      gen: 1
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/pokes', 
      success: (data) => {
        this.setState({
          pokemon: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  selectedPoke(event) {
    var index = event.target.value - 1;
    console.log(event.target.value);

    this.setState({
      selectedPoke: this.state.pokemon.slice(index, index + 1)
    })
  }

  render () {
    let tempList = this.state.pokemon;

    if (this.state.gen === 1) {
      tempList = tempList.slice(0, 151);
    } else if (this.state.gen === 2) {
      tempList = tempList.slice(151, 251);
    } else if (this.state.gen === 3) {
      tempList = tempList.slice(251, 387);
    } else if (this.state.gen === 4) {
      tempList = tempList.slice(387, 494);
    } else if (this.state.gen === 5) {
      tempList = tempList.slice(494, 650);
    } else if (this.state.gen === 6) {
      tempList = tempList.slice(650, 722);
    } else if (this.state.gen === 7) {
      tempList = tempList.slice(722, 808);
    }

    return (
      <div>
        <Generation pokes={tempList} target={this.state.selectedPoke} selectedPoke={this.selectedPoke.bind(this)}/>
      </div>
      
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));