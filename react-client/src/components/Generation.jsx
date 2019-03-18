import React from 'react';
import SelectedPokemon from './SelectedPokemon.jsx';

const Generation = (props) => (
  <div>
    { props.pokes.map(poke => <SelectedPokemon poke={poke} target={props.target} selectedPoke={props.selectedPoke}/>)}
  </div>
)

export default Generation;