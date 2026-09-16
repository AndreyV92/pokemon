import styles from "./PokemonCard.module.scss";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPokemonCardInfo } from "./api";
import InputSearch from "../Search/InputSearch";

const PokemonCard = () => {
  const [search, setSearch] = useState<string>("");

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
    //Inputs
    <div className="flex flex-col w-full  mx-8 rounded-[20px] mb-8 ">
      <div className="flex justify-between mb-8  ">
        <div className="flex gap-5">
          <InputSearch search={search} setSearch={setSearch} />

          <select className="border-1 border-solid rounded-[5px]" name="" id="">
            <option value="">Все типы</option>
          </select>

          <select className="border-1 border-solid rounded-[5px]" name="" id="">
            <option value="">Сортировка по ID</option>
          </select>
        </div>
        <div>
          <span>Показано: 151/151</span>
        </div>
      </div>
      {/* Cards */}
      <div className="flex flex-col ">
        <div className={styles.Wrapper}>
          {filteredPokemons.length > 0 ? (
            filteredPokemons.map((pokemon) => (
              //Card
              <div key={pokemon.id} className={styles.Card}>
                <div className="bg-blue-500">
                  <div className={styles.wrapImg}>
                    <img
                      className={styles.Image}
                      src={pokemon.sprites.front_default}
                      alt="картинка покемона"
                    />
                  </div>
                </div>

                <div className="p-5">
                  {/* Name */}
                  <h2 className="text-left mb-3 text-[18px] font-bold capitalize">
                    {pokemon.name}
                  </h2>
                  <ul className="flex gap-5 mb-15">
                    {pokemon.abilities.map((ability) => (
                      <li
                        className="border-1 border-solid rounded-[15px] px-2"
                        key={ability.ability.name}
                      >
                        <span>{ability.ability.name}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/readMore/$pokemonName"
                    params={{ pokemonName: pokemon.name }}
                  >
                    Подробнее →
                  </Link>
                </div>

                {/* <p className="mb-1">
                  Вес: <span>{pokemon.weight}</span>
                </p> */}

                {/* <p className="mb-1">
                  Рост: <span>{pokemon.height}</span>
                </p> */}

                {/* <h3 className="mb-1">Способности:</h3> */}
                {/* Ability */}

                {/* <Link
                  to="/location/$pokemonName"
                  params={{
                    pokemonName: pokemon.name,
                  }}
                >
                  Локация покемона
                </Link> */}
              </div>
            ))
          ) : (
            <div className="col-span-full text-center ">
              <span>Карточка не найдена</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
