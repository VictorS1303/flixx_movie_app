const SearchCategorySelect = () =>
{
    return (
        <div className="search-category-container flex gap-8">
            <div className="flex gap-2 cursor-pointer">
                <label htmlFor="movies" className="cursor-pointer">Movies</label>
                <input type="radio" name="search_category" className="-order-1" id="movies" />
            </div>
            <div className="flex gap-2 cursor-pointer">
                <label htmlFor="tv_shows" className="cursor-pointer">TV Shows</label>
                <input type="radio" name="search_category" className="-order-1" id="tv_shows" />
            </div>
        </div>
    );
};

export default SearchCategorySelect;
