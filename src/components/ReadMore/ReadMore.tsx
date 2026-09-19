import { readMoreRoute } from "@/routes/router";
import ButtonBack from "../ButtonBack/ButtonBack";
import { getPokemonCardInfo } from "../Pokemons/api";
import { useQuery } from "@tanstack/react-query";

const ReadMore = () => {
  const { pokemonName } = readMoreRoute.useParams();
  const { data, error, isPending } = useQuery({
    queryKey: ["pokemons"],
    queryFn: getPokemonCardInfo,
  });

  if (isPending) {
    return "Загрузка...";
  }

  if (error) return "An error has occurred: " + error.message;

  const pokemon = data.find((item) => item.name === pokemonName);
  console.log(pokemon);

  return (
    <div className="flex flex-col w-full  mx-8 rounded-[20px] mb-8">
      <ButtonBack className="self-start pb-5" />
      <div className="grid grid-cols-[400px_400px_400px] gap-4 ">
        <div className="border rounded-[15px] p-5">
          <img
            className="w-full"
            src={pokemon?.sprites.front_default}
            alt="Картинка покемона"
          />
        </div>
        <div className="border rounded-[15px] p-5">
          <h1 className="text-[30px] font-bold">{pokemon?.name}</h1>
          <div className="flex gap-5 justify-center" >
            <div>
              <p>Вес </p>
              <span>{pokemon?.weight}</span>
            </div>
            <div>
              <p>Рост</p>
              <span>{pokemon?.height}</span>
            </div>
            <div>
              <p>Базовый опыт</p>
              <span>{pokemon?.base_experience}</span>
            </div>
          </div>
        </div>
        <div className="border rounded-[15px] p-5">
          {pokemon?.stats.map((stat) => (
            stat.base_stat
          ))}
        </div>
        <div className="border"></div>
        <div className="border"></div>
        <div className="border"></div>
      </div>
    </div>
  );
};

export default ReadMore;
