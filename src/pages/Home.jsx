import { useCountriesQuery } from "../redux/countries.query";

const Home = () => {
  const { data, error, isLoading, isSuccess } = useCountriesQuery();

  return (
    <>
      <h1>Home page</h1>
      <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error! something went wrong.</p>}
        {isSuccess && <pre>{JSON.stringify(data)}</pre>}
      </div>
    </>
  );
};

export default Home;
