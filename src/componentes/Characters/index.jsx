import "antd/dist/antd.css";
import { Button, Card, Tooltip } from "antd";

import CardCharacter from "../CardCharacter";

const Characters = ({
  characters,
  favorites,
  setFavorites,
  number,
  setNumber,
  getCharacters,
}) => {
  const page = number;
  console.log("page", page);

  const nextPage1 = () => {
    setNumber(number + 1);
    console.log(number);
    getCharacters();
  };

  const prevPage1 = () => {
    setNumber(number - 1);
    console.log(number);
    getCharacters();
  };
  return (
    <Card title="Personagnes Rick e Morty">
      <div>
        <Button onClick={prevPage1}>anterior</Button> Page:
        <Button type="primary" shape="circle">
          {page}
        </Button>
        <Button onClick={nextPage1}>proximo</Button>
      </div>

      {characters.map((character, index) => (
        <CardCharacter
          key={index}
          character={character}
          setFavorites={setFavorites}
          favorites={favorites}
        ></CardCharacter>
      ))}
    </Card>
  );
};

export default Characters;
