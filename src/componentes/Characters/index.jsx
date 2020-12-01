import CardCharacter from "../CardCharacter";
import "./style.css";

const Characters = ({ characters, favorites, setFavorites, number }) => {
  const page = number;
  console.log("page", page);
  return (
    <div className="Layout">
      <div>
        <h2>Pagina Atual: {page} </h2>
      </div>
      <div className="Characters-list">
        {characters.map((character, index) => (
          <CardCharacter
            key={index}
            character={character}
            setFavorites={setFavorites}
            favorites={favorites}
          ></CardCharacter>
        ))}
      </div>
    </div>
  );
};

export default Characters;
