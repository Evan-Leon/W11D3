import React from 'react';
import PokemonIndexItem from "./pokemon_index_item"

class PokemonIndex extends React.Component{
  constructor(props){
  super(props)
  }
  
  componentDidMount(){
  this.props.requestAllPokemon()
  }
  
  render(){
    const pokemonItems = this.props.pokemon.map(poke => (
      <PokemonIndexItem key={poke.id} pokemon={poke} />
    ));
    return (
    <section className="pokedex">
      <ul>
      {this.props.pokemon.map((poke) => (
        <li key={poke.id} className="pokemon-index-item">
          <span>{poke.id}</span>
          <img src={poke.imageUrl}/>
          <span>{poke.name}</span>
        </li>
      ))}
      </ul>


      <section className="pokedex">
        <ul>{pokemonItems}</ul>
      </section>;


    </section>
    )
  }
  }
  
  
  
  export default PokemonIndex;