import "antd/dist/antd.css";
import { Button } from "antd";
import { Card } from "antd";

import "./style.css";
import PokemonCard from "../PokemonCard";
const PokemonsList = ({ pokemons }) => {
  return (
    <Card title="Personagnes Pokemons">
      <div>
        <Button>anterior</Button> Page:
        <Button type="primary" shape="circle">
          1
        </Button>
        <Button>proximo</Button>
      </div>

      <div className="Pokemon-cards">
        {pokemons.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </div>
    </Card>
  );
};

export default PokemonsList;
