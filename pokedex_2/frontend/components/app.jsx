import { Route } from "react-router-dom";
import React from "react";
import PokemonIndexContainer from "./pokemon/pokemon_index_container";

const App = () => (
    <Switch>
       <Route path="/pokemon/:id" component={PokemonDetail} />
       <Route path="/" component={PokemonIndexContainer} />
     </Switch>
);

export default App;

