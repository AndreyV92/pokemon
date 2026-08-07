import { Link } from "@tanstack/react-router";
import { abilityRoute } from "@/routes/router";
import { useEffect, useState } from "react";
import type { AbilityResponse } from "@/types/types";
import styles from "./Ability.module.scss";

function AbilityComponent() {
  const [ability, setAbility] = useState<AbilityResponse | null>(null);
  const { abilityName } = abilityRoute.useParams();
  // console.log(abilityName);

  const getAbilityFetch = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/ability/${abilityName}`,
    );
    return response.json();
  };

  useEffect(() => {
    const abilityData = async () => {
      const data = await getAbilityFetch();
      setAbility(data);
    };

    abilityData();
  }, [abilityName]);
  console.log(ability);
  return (
    <>
      <h1 className={styles.mb10}>Эффект способностей:</h1>
      <ul className={styles.mb10}>
        {ability &&
          ability.effect_entries.map((effect) => (
            <li className={styles.mb5} key={effect.id}>
              <span>Эффект:</span> {effect.effect}
            </li>
          ))}
      </ul>

      <button>
        <Link to={"/"}>На главную</Link>
      </button>
    </>
  );
}

export default AbilityComponent;
