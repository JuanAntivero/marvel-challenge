import "./SearchStyles.css";
import { SearchIcon } from "../../components";

type SearchProps = {
  resultsCount?: number;
  onChange: (value: string) => void;
  disabled?: boolean;
}

const Search = ({ resultsCount, onChange, disabled = false }: SearchProps) => {
  const resultsText = `${resultsCount} ${resultsCount === 1 ? "RESULT" : "RESULTS"}`;
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
      {!disabled && <p className="search_results-text">{resultsText}</p>}
    </div>
  );
}

export default Search;