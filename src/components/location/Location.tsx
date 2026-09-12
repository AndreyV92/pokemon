import { locationsRoute } from "@/routes/router";
import ButtonBack from "../ButtonBack/ButtonBack";
import { useQuery } from "@tanstack/react-query";
import { getLocations } from "./api";

const Location = () => {
  const { pokemonName } = locationsRoute.useParams();

  console.log(pokemonName);

  const { data, error, isPending } = useQuery({
    queryKey: ["location", pokemonName],
    queryFn: () => getLocations(pokemonName),
  });

  if (isPending) {
    return "Загрузка...";
  }

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="flex flex-col px-8">
      <h1 className="uppercase font-bold ">Локации покемона:</h1>
      <div className="mb-[20px]">
        {data.map((location) => (
        <div className="mb-[5px]" key={location.location_area.name}>
          <h2>{location.location_area.name}</h2>
        </div>
      ))}
      </div>
      

      <ButtonBack />
    </div>
  );
};

export default Location;
