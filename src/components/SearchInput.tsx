import Input from "@components/ui/Input";
import { useFilter } from "@context/FilterContext";
import { CloseIcon, SearchIcon } from "@components/ui/Icons";

const SearchInput = () => {
    const { searchQuery, setSearchQuery } = useFilter();

    return (
        <div className="relative  border border-[var(--border-color)] rounded-3xl">
            <Input
                icon={<SearchIcon />}
                id="search"
                type="text"
                placeholder="Search for pics!"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
                <button
                    aria-label="Clear search input"
                    onClick={() => setSearchQuery("")}
                    className="cursor-pointer absolute right-3 top-4 transform -translate-y-1/2 hover:opacity-50 transition"
                >
                    <CloseIcon />
                </button>
            )}
        </div>
    );
};

export default SearchInput;
