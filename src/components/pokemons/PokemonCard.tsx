import styles from "./PokemonCard.module.scss";
import { Link } from "@tanstack/react-router";
import { indexRoute } from "@/routes/router";

const PokemonCard = () => {
  const pokemons = indexRoute.useLoaderData();

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
                      abilityName: ability.ability.name,
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
