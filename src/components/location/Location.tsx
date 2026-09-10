import { locationsRoute } from "@/routes/router";
import ButtonBack from "../ButtonBack/ButtonBack";
import { useQuery } from "@tanstack/react-query";
import { getLocations } from "./api";

const Location = () => {
  const { pokemonName } = locationsRoute.useParams();

  console.log(pokemonName);

  const { data, error, isPending } = useQuery({
    queryKey: ["ability", "abilityName"],
    queryFn: () => getLocations(pokemonName),
  });

  if (isPending) {
    return "Загрузка...";
  }

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h1>Локации покемона</h1>

      {data.map((location) => (
        <div key={location.location_area.name}>
          <h2>{location.location_area.name}</h2>
        </div>
      ))}

      <ButtonBack />
    </div>
  );
};

export default Location;
