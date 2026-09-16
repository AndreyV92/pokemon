import { readMoreRoute } from "@/routes/router";
import ButtonBack from "../ButtonBack/ButtonBack"


const ReadMore = () => {
const { pokemonName } = readMoreRoute.useParams();
console.log(pokemonName)

  return (
    <div>
      h1
      <ButtonBack />
    </div>
  )
}

export default ReadMore
