import "@/styles/components/Header/searchForm.scss";

import { IoIosSearch } from "react-icons/io";

const SearchForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("teste");
  };

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="Insira aqui o nome da cidade"
      />
      <button type="submit" className="search-btn">
        <IoIosSearch />
      </button>
    </form>
  );
};

export default SearchForm;
