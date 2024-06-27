import React, {useState} from 'react'; 
//the search component
const Search = (cakes, setCakes) => {

    const [searchCake, setSearchCake] = useState(''); 
    const filterCakes = (searchCake) => {
        console.log(searchCake); 
        const filteredCakes = cakes.filter(cake => cake.cakeName.toLowerCase().includes(searchCake)); 
        return filteredCakes; 
    }

    const handleSubmit = (e) => {
        e.preventDefault;
        const filteredCakes = filterCakes(searchCake); 
        setCakes(filteredCakes); 

    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="search-field">Search for a cake:</label>
            <input type="text" id="search-field" placeholder='Search for a cake' onChange={(e) => setSearchCake(e.target.value)}/>
            <input type="submit"/>
        </form>
    )

}

export default Search;