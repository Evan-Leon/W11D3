import React from "react";


const PokemonIndexItem  = props =>(
     <li name={props.pokemon.name} imageUrl={props.pokemon.imageUrl} > </li>
)  

export default PokemonIndexItem;