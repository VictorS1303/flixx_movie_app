'use client';
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';

const SearchFilter = () =>
{
    const [searchFilterOpenState, setSearchFilterOpenState] = useState(false);

    const toggleSearchFilterOpenState = () =>
    {
        setSearchFilterOpenState(!searchFilterOpenState);
    };

    return (
        <div className="mt-4 flex items-center justify-center">
            <div className="relative flex items-center w-64">
                <input
                    type="text"
                    className={`bg-transparent border-b-2 border-b-white transition-all duration-300 ease-in-out focus:outline-none focus:border-b-yellow-300 ${searchFilterOpenState ? 'w-full' : 'w-0'
                        } placeholder:text-white`}
                    placeholder="Search movie"
                    onChange={(e) => filterMovies(e)}
                />
                <FaSearch
                    className={`cursor-pointer absolute transition-all duration-300 ease-in-out hover:text-yellow-300 ${searchFilterOpenState ? 'right-0 translate-x-0' : 'left-1/2 -translate-x-1/2'
                        }`}
                    size={20}
                    onClick={toggleSearchFilterOpenState}
                />
            </div>
        </div>
    );

    function filterMovies(e)
    {
        console.log(e.target.value);
    }
};

export default SearchFilter;
