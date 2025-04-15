import { useEffect, useTransition, useState } from "react";
import { getCountryData } from "../api/PostApi";
import { Loader } from "../Components/Ui/Loader";
import CountryCard from "../Components/Layout/CountryCard";
import SearchFilter from "../Components/Ui/SearchFilter";

function Country() {
  const [isPending, startTransition] = useTransition(); // Used to manage UI loading during async updates
  const [countries, setCountries] = useState([]); // Store all country data

  const [search, setSearch] = useState(); // Stores the search input
  const [filter, setFilter] = useState("all"); // Stores selected region filter

  useEffect(() => {
    // Fetch country data on component mount
    startTransition(async () => {
      const res = await getCountryData(); // Call API
      setCountries(res.data); // Save response data to state
    });
  }, []);

  // Show loader while data is loading
  if (isPending) return <Loader />;

  // Search function: returns true if country name includes search term
  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country; // No search applied, include all
  };

  // Filter function: checks if country region matches selected filter
  const filterRegion = (country) => {
    if (filter === "all") return country; // No region filter applied
    return country.region === filter;
  };

  // Apply both search and filter logic
  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  return (
    <section className="country-section">
      {/* Search and filter UI */}
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />

      {/* Display filtered countries */}
      <ul className="grid grid-four-cols">
        {filterCountries.map((curCountry, index) => {
          return <CountryCard country={curCountry} key={index} />;
        })}
      </ul>
    </section>
  );
}

export default Country;
