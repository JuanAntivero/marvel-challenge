import "./SearchStyles.css";
import { SearchIcon } from "../../components";

type SearchProps = {
  resultsCount?: number;
  onChange: (value: string) => void;
  disabled?: boolean;
}

const Search = ({ resultsCount, onChange, disabled = false }: SearchProps) => {
  return (
    <div className="search">
      <div className="search_container">
        <SearchIcon />
        <input
          type="text"
          disabled={disabled}
          placeholder="SEARCH A CHARACTER..."
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      {resultsCount != undefined && <p className="search_results-text">{resultsCount} RESULTS</p>}
    </div>
  );
}

export default Search;