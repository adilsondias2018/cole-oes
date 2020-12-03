import { useEffect } from "react";
import "./style.css";
import "antd/dist/antd.css";
import { Button } from "antd";
import { Card } from "antd";
const CardCharacter = ({
  character,
  favorites,
  setFavorites,
  isRemovable = false,
}) => {
  const { Meta } = Card;
  const handleAddFavorite = (char) => {
    const alreadyExist = favorites.find((element) => element.id === char.id);

    if (alreadyExist) return;

    return setFavorites([...favorites, char]);
  };

  const handleRemoveFavorite = (char) => {
    const newList = favorites.filter((character) => character.id !== char.id);
    localStorage.setItem("favoriteList", JSON.stringify(newList));
    setFavorites(newList);
  };

  useEffect(() => {
    localStorage.setItem("favoriteList", JSON.stringify(favorites));
  }, [favorites]);

  const gridStyle = {
    width: "25%",
    textAlign: "center",
  };

  return (
    <Card.Grid style={gridStyle}>
      <div>
        <img src={character.image} alt="imagem" />
      </div>
      <div className="Name-Character">{character.name}</div>
      <div className="Name-Character">{character.gender}</div>
      <div>
        {isRemovable ? (
          <Button
            type="primary"
            onClick={() => handleRemoveFavorite(character)}
          >
            Revover Favorites
          </Button>
        ) : (
          <Button type="primary" onClick={() => handleAddFavorite(character)}>
            Add Favorites
          </Button>
        )}
      </div>
    </Card.Grid>
  );
};
export default CardCharacter;
