import {connect} from 'react-redux';
import PokemonDetail from './pokemon_detail';
import {requestAPokemon} from '../../actions/pokemon_actions';

const mapStateToProps = (state, ownProps) => ({
    pokemon: state.pokemon[ownProps.match.params.id]
  })
  
  const mapDispatchToProps = (dispatch, ownProps) => ({
    requestAPokemon: () => dispatch(requestAPokemon(ownProps.match.params.id))
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);