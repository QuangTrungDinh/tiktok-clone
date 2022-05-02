import SearchIcon from './svgIcons/SearchIcon';

const SearchBar = () => {
  return (
    <div className="search">
      <form action="/search">
        <input type="search" placeholder="Search accounts and videos" />
        <span></span>
        <button type="submit">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
