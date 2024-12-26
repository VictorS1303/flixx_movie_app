import SearchCategorySelect from './SearchCategorySelect.jsx'
import SearchFilter from './SearchFilter.jsx'

const SearchContainer = () =>
{
    return (
        <div className="flex flex-col items-center gap-4 text-white">
            <SearchCategorySelect />
            <SearchFilter />
        </div>
    );
}

export default SearchContainer;