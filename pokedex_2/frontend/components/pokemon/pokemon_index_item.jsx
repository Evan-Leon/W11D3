import React from "react";
import { Link } from "react-router-dom";


const PokemonIndexItem  = props =>(
     <li name={props.pokemon.name} imageurl={props.pokemon.imageUrl} >
          <Link to={`/pokemon/${props.pokemon.id}`}>{props.pokemon.name}</Link> 
     </li>
)  

export default PokemonIndexItem;