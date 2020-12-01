import { useEffect } from "react";
import "./style.css";
import "antd/dist/antd.css";
import { Button } from "antd";
import { Card } from "antd";
const CardCharacter = ({ character, favorites, setFavorites }) => {
  const { Meta } = Card;
  const handleAddFavorite = (char) => {
    const alreadyExist = favorites.find((element) => element.id === char.id);

    if (alreadyExist) return;

    return setFavorites([...favorites, char]);
  };

  useEffect(() => {
    localStorage.setItem("favoriteList", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div className="Card-character">
      <Card>
        <div>
          <img src={character.image} alt="imagem" />
        </div>
        <div>{character.name}</div>
        <div>{character.gender}</div>
        <div>
          <Button
          // onClick={handleAddFavorite(character)}
          >
            Add Favorites
          </Button>
        </div>
      </Card>
    </div>
  );
};
export default CardCharacter;
