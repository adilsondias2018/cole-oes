import { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axios from "axios";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import "./App.css";

import CardList from "./componentes/CardList/CardList";
import Characters from "./componentes/Characters";
import FavoritesCharacters from "./componentes/FavoriteCharacters";
import PokemonsList from "./componentes/PokemonsList";
import FavoritePokemons from "./componentes/FavovirtePokemons";

function App() {
  // Esta para receber os que vem da api,
  // No caso aqui um objetos com todos os detalhes de cada personangem e página
  const [characters, setChacraters] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [number, setNumber] = useState(1);
  const [offset, setOffset] = useState(20);

  const [favorites, setFavorites] = useState(() => {
    const favoriteList = localStorage.getItem("favoriteList");
    if (favoriteList) {
      return JSON.parse(favoriteList);
    }
    return [];
  });

  const getCharacters = () => {
    // Aqui já vou usar o Axio para fazer a requisação invez do fetch

    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${number}`)
      .then((res) => {
        setChacraters(res.data.results);
        console.log(res.data.info);
      })
      .catch((res) => console.log("Error", res));
  };

  const getPokemons = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
      .then((res) => {
        setPokemons(res.data.results);
        console.log(res.data.results);
      })
      .catch((res) => console.log("Error", res));
  };

  const nextPage = () => {
    setNumber(number + 1);
    console.log(number);
    getCharacters();
  };

  const prevPage = () => {
    setNumber(number - 1);
    console.log(number);
    getCharacters();
  };

  useEffect(getCharacters, []);
  useEffect(getPokemons, []);

  useEffect(nextPage, []);
  useEffect(prevPage, []);

  return (
    <div className="App">
      <div>
        <Link to="/">Home</Link> <Link to="/rick-morty">Rick Morty</Link>
        <Link to="/favorite-rickmorty">Favorites Rick e Morty</Link>
        <Link to="/pokemons">Pokemons</Link>
        <Link to="/favorites-pokemons">Favorites Pokemons</Link>
        <button onClick={prevPage}>anterior</button>
        <button onClick={nextPage}> Proxixo</button>
      </div>
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            {/* passando por props, agora preciso saber onde recebo esse valores */}
            <Characters
              characters={characters}
              favorites={favorites}
              setFavorites={setFavorites}
              number={number}
            />
          </Route>
          <Route exact path="/rick-morty">
            {/* passando por props, agora preciso saber onde recebo esse valores */}
            <Characters
              characters={characters}
              favorites={favorites}
              setFavorites={setFavorites}
              number={number}
            />
          </Route>
          <Route path="/favorite-rickmorty">
            <FavoritesCharacters favorites={favorites} />
          </Route>
          <Route path="/pokemons">
            <PokemonsList
              pokemons={pokemons}
              offset={offset}
              setOffset={setOffset}
            />
          </Route>
          <Route path="favorites-pokemons">
            <FavoritePokemons />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
