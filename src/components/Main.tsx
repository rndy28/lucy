import Clock from "components/Clock";
import SearchBar from "components/SearchBar";
import React from "react";
import useSearchTerm from "utils/useSearchTerm";

interface Props {
  inputSearchRef: React.RefObject<HTMLInputElement>;
}

const Main = ({ inputSearchRef }: Props) => {
  const { query, handleChange } = useSearchTerm();

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      window.location.href = `https://google.com/search?q=${query}`;
    }
  };

  return (
    <div className="relative">
      <div className="max-w-2xl flex flex-col gap-4 w-full absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
        <Clock />
        <SearchBar
          placeholder="Google search here..."
          size="lg"
          onChange={handleChange}
          onKeyDown={handleSearch}
          ref={inputSearchRef}
        />
        <img
          src="/assets/lucy.png"
          alt="Lucy"
          className="rounded-md object-cover mt-4"
        />
      </div>
    </div>
  );
};

export default Main;
