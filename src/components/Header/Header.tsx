import pokeboll from "../../images/pokeball.png";
import InputSearch from "../Search/InputSearch";
import style from "./Header.module.scss";

export const Header = () => {
  return (
    <div className="px-8 py-4 flex justify-between items-center bg-white">
      <nav>
        <ul className="flex items-center gap-10">
          <li className="flex items-center">
            <div className="pr-4">
              <img className="w-15 h-15" src={pokeboll} alt="pokeboll" />
            </div>

            <span>Pokedex</span>
          </li>
          <li>Главная</li>
          <li>Избранное</li>
        </ul>
      </nav>
      <ul className="flex items-center gap-10 ">
        <li className="mb-0">
          <InputSearch />
        </li>
        <li>
          <label className={style.checkbox_ios}>
            <input type="checkbox" />
            <span className={style.checkbox_ios_switch}></span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Header;
