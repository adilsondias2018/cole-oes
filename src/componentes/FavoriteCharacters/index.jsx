import Card from "../CardCharacter";
const FavoriteCharcters = ({ favorites }) => {
  return (
    <div>
      <h2>Page Favorites</h2>
      <div>
        {favorites.map((character, index) => (
          <Card key={index} character={character} />
        ))}
      </div>
    </div>
  );
};

export default FavoriteCharcters;
