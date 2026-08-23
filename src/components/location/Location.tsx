import { locationsRoute } from "@/routes/router";
import ButtonBack from "../ButtonBack/ButtonBack";

const Location = () => {
  const locations = locationsRoute.useLoaderData();

  console.log(locations);
  return (
    <div>
      <h1>Локации покемона</h1>

      {locations.map((location) => (
        <div key={location.location_area.name}>
          <h2>{location.location_area.name}</h2>
        </div>
      ))}

      <ButtonBack />
    </div>
  );
};

export default Location;
