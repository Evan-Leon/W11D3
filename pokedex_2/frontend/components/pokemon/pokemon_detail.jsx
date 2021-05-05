import React from "react";

class PokemonDetail extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.requestAPokemon(this.props.pokemon.id)
    }

    render(){
        const {pokemon} = this.props
        if(pokemon === undefined) return null
        return (
            <ul>
                <li key={this.props.pokemon.id} >
                    <span>{this.props.pokemon.id}</span>
                    <img src={this.props.pokemon.imageUrl}/>
                    <span>{this.props.pokemon.name}</span>
                </li>
            </ul>
        )
    }
}




export default PokemonDetail;