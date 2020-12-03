import "antd/dist/antd.css";
import { Card } from "antd";
import CardCharacter from "../CardCharacter";

const FavoriteCharcters = ({ favorites, setFavorites }) => {
  const gridStyle = {
    width: "25%",
    textAlign: "center",
  };

  return (
    <Card title="Personagnes Favoritos Rick e Morty">
      {favorites.map((character, index) => (
        <CardCharacter
          key={index}
          character={character}
          favorites={favorites}
          setFavorites={setFavorites}
          isRemovable
        />
      ))}
    </Card>
  );
};

export default FavoriteCharcters;
