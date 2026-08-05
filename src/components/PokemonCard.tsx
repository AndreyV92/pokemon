import React from "react";
import { useEffect, useState } from "react";

import type { Pokemon, PokemonDataFetch } from "../types/types";
import styles from "./PokemonCard.module.scss";
import { Link } from "@tanstack/react-router";

const PokemonCard = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function getPokemonData() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const pokemonsAlldata = await response.json();
      console.log(pokemonsAlldata);

      const pokemonFetchResults = pokemonsAlldata.results.map(
        async (pokemon: PokemonDataFetch) => {
          // console.log(pokemon)
          const pokemonResponse = await fetch(pokemon.url);
          return pokemonResponse.json();
        },
      );

      const pokemonData = await Promise.all(pokemonFetchResults);
      console.log(pokemonData);
      setPokemons(pokemonData);
    }

    getPokemonData();
  }, []);

  return (
    <>
      <div className={styles.Wrapper}>
        {pokemons.map((pokemon) => (
          <div key={pokemon.id} className={styles.Card}>
            <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
              Название: <span>{pokemon.name}</span>
            </h2>

            <div className={styles.wrapImg}>
              <img
                className={styles.Image}
                src={pokemon.sprites.front_default}
                alt="картинка покемона"
              />
            </div>

            <p className={styles.p5}>
              Вес: <span>{pokemon.weight}</span>
            </p>

            <p className={styles.p5}>
              Рост: <span>{pokemon.height}</span>
            </p>

            <h3 className={styles.p5}>Способности:</h3>
            <ul>
              {pokemon.abilities.map((ability) => (
                <li className={styles.p5} key={ability.ability.name}>
                  <Link
                    to="/ability/$abilityName"
                    params={{
                      abilityName: ability.ability.name
                    }}
                  >
                    {ability.ability.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default PokemonCard;
