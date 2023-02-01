import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components/HeroCard";
import { getHeroesByName } from "../helpers/getHeroesByName";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);
  const { searchText, onInputChange } = useForm({ searchText: q });

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  const onSearchSubmit = (event) => {
    event.preventDefault();

    // if (searchText.length <= 1) return;

    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>SearchPage</h1>
      <hr />
      <div className="row">
        <section className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Searh a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-3">Search</button>
          </form>
        </section>
        <section className="col-7">
          <h4>Results</h4>
          <hr />
          {/* 
          {q === "" ? (
            <div className="alert alert-primary">Search hero</div>
          ) : (
            heroes.length < 1 && (
              <div className="alert alert-danger text-center">
                No hero with <b>{q}</b>
              </div>
            )
          )} */}

          <div
            className="alert alert-primary animate__animated animate__fadeIn"
            style={{ display: showSearch ? "" : "none" }}
          >
            Search hero
          </div>

          <div
            className="alert alert-danger text-center animate__animated animate__fadeIn"
            style={{ display: showError ? "" : "none" }}
          >
            No hero with <b>{q}</b>
          </div>

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </section>
      </div>
    </>
  );
};
