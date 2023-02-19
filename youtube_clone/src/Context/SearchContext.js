import { createContext, useState } from "react";


export const SearchContext = createContext();

export const SearchContextProvider = ({children}) => {
    const [search, setSearch] = useState("football");

    const handleSearch = (val) => {
        setSearch(val);
    }
    return <SearchContext.Provider value={{search, handleSearch}}>
        {children}
    </SearchContext.Provider>
}