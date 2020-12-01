import "antd/dist/antd.css";
import { Button } from "antd";
import { Card } from "antd";

import "./style.css";

const PokemonCard = ({ pokemon }) => {
  const { Meta } = Card;
  const baseUrl = pokemon.url.split("/");
  const id = baseUrl["6"];
  console.log("base Url", baseUrl);
  console.log("id", id);
  return (
    <div className="Pokemon-card">
      <Card>
        <div>{pokemon.name}</div>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        />
        <div>
          <Button type="primary">Add favorite</Button>
        </div>
      </Card>
    </div>
  );
};

export default PokemonCard;
