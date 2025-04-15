function SearchFilter ({
    search,
    setSearch,
    filter,
    setFilter,
    countries,
    setCountries,
  }) {
  
    // Update search state when input changes
    const handleInputChange = (event) => {
      event.preventDefault();
      setSearch(event.target.value);
    };
  
    // Update region filter when dropdown changes
    const handleSelectChange = (event) => {
      event.preventDefault();
      setFilter(event.target.value);
    };
  
    // Sort countries alphabetically by name
    const sortCountries = (value) => {
      const sortCountry = [...countries].sort((a, b) => {
        return value === "asc"
          ? a.name.common.localeCompare(b.name.common) // ascending
          : b.name.common.localeCompare(a.name.common); // descending
      });
      setCountries(sortCountry);
    };
  
    return (
      <section className="section-searchFilter container">
        {/* Search input */}
        <div>
          <input
            type="text"
            placeholder="search"
            value={search}
            onChange={handleInputChange}
          />
        </div>
  
        {/* Sort buttons */}
        <div>
          <button onClick={() => sortCountries("asc")}>Asc</button>
        </div>
  
        <div>
          <button onClick={() => sortCountries("des")}>Desc</button>
        </div>
  
        {/* Region filter dropdown */}
        <div>
          <select
            className="select-section"
            value={filter}
            onChange={handleSelectChange}
          >
            <option value="all">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </section>
    );
  };
  
  export default SearchFilter;
  