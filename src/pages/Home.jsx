import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountry, searchCountry } from "../redux/country.query";
import { filterSearch } from "../redux/country.slice";
import Header from "../components/Header";
import Card from "../components/Card";
import "../components/styles/home.css";

const Home = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isLoaded, error } = useSelector(
    (state) => state.country
  );

  const handleInput = (e) => {
    e.preventDefault();
    const name = e.target.children[0].value;
    const list = data.filter((c) => c.name.includes(name));
    if (list.length > 0) {
      dispatch(filterSearch);
    } else {
      dispatch(searchCountry(name));
    }
  };

  useEffect(() => {
    if (!isLoaded) dispatch(getCountry());
  }, [dispatch, isLoaded]);

  return (
    <>
      <Header />
      <main className="pages">
        <form
          onSubmit={handleInput}
          className="flex items-center justify-center w-full bg-gray-100 gap-x-4"
        >
          <input
            className="p-1 pl-3 border-2 border-red-300 my-2 rounded"
            type="text"
            name="search"
            placeholder="search a country"
            autoComplete="off"
          />

          <button type="button" onClick={() => dispatch(getCountry())}>
            reset
          </button>
        </form>
        <div className="cards">
          {isLoading && <p>Loading...</p>}
          {error && <p>Error! {JSON.stringify(error)}</p>}
          {isLoaded &&
            !error &&
            data.map((country) => (
              <Card
                key={country.name}
                info={{
                  name: country.name,
                  population: country.population,
                  slug: country.iso2,
                }}
              />
            ))}
        </div>
      </main>
    </>
  );
};

export default Home;
