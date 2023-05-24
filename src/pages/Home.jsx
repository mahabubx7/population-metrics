import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountry, searchCountry } from "../redux/country.query";
import { filterSearch } from "../redux/country.slice";
import Header from "../components/Header";
import Card from "../components/Card";
import "../components/styles/home.css";
import Button from "../components/molecules/Button";
import Loading from "../components/Loading";

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
      dispatch(filterSearch(name));
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
          className="flex items-center justify-around w-full bg-theme-light gap-x-4"
        >
          {!isLoading && (
            <input
              className="p-1 min-w-[300px] pl-3 border-2 border-theme-deem my-2 rounded"
              type="text"
              name="search"
              placeholder="search a country"
              autoComplete="off"
            />
          )}
          <Button
            classes="text-white"
            icon="refresh-line"
            onClick={() => dispatch(getCountry())}
          />
        </form>
        <div className="cards">
          {isLoading && <Loading />}
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
