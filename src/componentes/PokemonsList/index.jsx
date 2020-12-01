import "antd/dist/antd.css";
import { Button } from "antd";

import "./style.css";
import PokemonCard from "../PokemonCard";
const PokemonsList = ({ pokemons }) => {
  return (
  <div className="LayoutPage">
      <div>
        {" "}
        <Button>anterior</Button> {"<"}Página Atual{">"}
        <Button>proximo</Button>
      </div>
      <div className="Pokemon-cards">
        {pokemons.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonsList;
