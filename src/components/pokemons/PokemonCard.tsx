import styles from "./PokemonCard.module.scss";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPokemonCardInfo } from "./api";

const PokemonCard = () => {
  // const pokemons = indexRoute.useLoaderData();

  const [search, setSearch] = useState("");

  const { data, error, isPending } = useQuery({
    queryKey: ["pokemons"],
    queryFn: getPokemonCardInfo,
  });

  if (isPending) {
    return "Загрузка...";
  }

  if (error) return "An error has occurred: " + error.message;

  const filteredPokemons = data.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex flex-col px-8">
      <input
        // className={styles.input}
        className="mb-8 border-1 border-solid rounded-sm w-48 self-center px-4"
        type="text"
        placeholder="Поиск покемона..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className={styles.Wrapper}>
        {filteredPokemons.length > 0 ? (
          filteredPokemons.map((pokemon) => (
            <div key={pokemon.id} className={styles.Card}>
              <h2 className="text-center mb-3">
                Название: <span>{pokemon.name}</span>
              </h2>

              <div className={styles.wrapImg}>
                <img
                  className={styles.Image}
                  src={pokemon.sprites.front_default}
                  alt="картинка покемона"
                />
              </div>

              <p className="mb-1">
                Вес: <span>{pokemon.weight}</span>
              </p>

              <p className="mb-1">
                Рост: <span>{pokemon.height}</span>
              </p>

              <h3 className="mb-1">Способности:</h3>
              <ul>
                {pokemon.abilities.map((ability) => (
                  <li className={styles.p5} key={ability.ability.name}>
                    <Link
                      to="/ability/$abilityName"
                      params={{
                        abilityName: ability.ability.name,
                      }}
                    >
                      {ability.ability.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to="/location/$pokemonName"
                params={{
                  pokemonName: pokemon.name,
                }}
              >
                Локация покемона
              </Link>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center ">
            <span>Карточка не найдена</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonCard;
