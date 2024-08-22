function Search() {
  return (
    <div className="search">
      <h3 className="search-heading">Search Terminology</h3>
      <form action="" className="search-form">
        <input
          type="search"
          name="term"
          id="term"
          placeholder="search terminology"
        />
        <button className="search-btn">Search</button>
      </form>
    </div>
  );
}

export default Search;
