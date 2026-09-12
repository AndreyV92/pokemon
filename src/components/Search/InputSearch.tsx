import React, { type SetStateAction } from "react";

type InputSearchPrors = {
  search: string;
  setSearch: React.Dispatch<SetStateAction<string>>;
};

export const InputSearch = ({ search, setSearch }: InputSearchPrors) => {
  return (
    <input
      className="mb-8 border-1 border-solid rounded-[20px] w-58 self-center px-4 bg-white "
      type="text"
      placeholder="Поиск по имени или ID"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default InputSearch;
