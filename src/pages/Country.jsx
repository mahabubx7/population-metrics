import { useSelector } from "react-redux";
import Header from "../components/Header";

const Country = () => {
  let info = null;
  const { isLoading, isLoaded, error, data } = useSelector(
    (state) => state.country
  );

  if (isLoading) return <p>loading...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;

  if (isLoaded) {
    info = data.filter(
      (c) => c.iso2.toLowerCase() === window.location.href.split("/")[4]
    );
  }

  return (
    <>
      <Header isDetail />
      <main className="pages">
        {/* <img className="flag" alt="flag" src={info[0].flag} /> */}
        <b>{info[0].name}</b>
        <span> = </span>
        <i>
          {info[0].population > 100 ? (
            <>{info[0].population / 1000} M</>
          ) : (
            <>{info[0].population} K</>
          )}
        </i>
        <p>Population Growth: {info[0].pop_growth}%</p>
        <p>Employment Ratio: {100 - info[0].unemployment}%</p>
        <p>Sex Ratio: {info[0].sex_ratio}%</p>
        <p>Urban Population: {info[0].urban_population}%</p>
      </main>
    </>
  );
};

export default Country;
