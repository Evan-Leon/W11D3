import { Route, Switch } from "react-router-dom";
import React from "react";
import PokemonIndexContainer from "./pokemon/pokemon_index_container";
import PokemonDetail from "./pokemon/pokemon_detail"

const App = () => (
    <Switch>
       <Route path="/pokemon/:id" component={PokemonDetail} />
       <Route path="/" component={PokemonIndexContainer} />
     </Switch>
);

export default App;

