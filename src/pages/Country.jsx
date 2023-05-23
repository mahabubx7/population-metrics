import { useSelector } from "react-redux";
import Header from "../components/Header";
import calculatePopulation from "../helpers/population";

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
      <Header isDetail title={info[0].name} />
      <main className="pages">
        <div className="detail-card">
          <img
            className="flag"
            alt="flag"
            src={`https://flagcdn.com/${info[0].iso2.toLowerCase()}.svg`}
          />
          <h2>{info[0].name}</h2>
          <i>
            {info[0].population > 100 ? (
              <p className="text-xl">
                <strong>
                  Total Population: {calculatePopulation(info[0].population)}
                </strong>
              </p>
            ) : (
              <p className="text-xl">
                <strong>
                  Total Population: {calculatePopulation(info[0].population)}
                </strong>
              </p>
            )}
          </i>
          <p className="italic text-xl">
            <small>Population Growth:</small> {info[0].pop_growth}%
          </p>
          <p className="italic text-xl">
            <small>Employment Ratio:</small> {info[0].unemployment}%
          </p>
          <p className="italic text-xl">
            <small>Sex Ratio:</small> {info[0].sex_ratio}%
          </p>
          <p className="italic text-xl">
            <small>Urban Population:</small> {info[0].urban_population}%
          </p>
        </div>
      </main>
    </>
  );
};

export default Country;
