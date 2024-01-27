import "@/styles/components/Header/header.scss";

import SearchForm from "@/components/Header/SearchForm";

const Header = () => {
  return (
    <section className="header">
      <h2>Previsão do tempo</h2>

      <SearchForm />
    </section>
  );
};

export default Header;
