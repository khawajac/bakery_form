import React, {useState} from 'react'; 
//the search component
const Search = ({cakes, setCakes, cakesStatic, setCakesStatic}) => {

    const [searchCake, setSearchCake] = useState(""); 

    const filterCakes = (searchCake) => {
        console.log(searchCake); 
        if(searchCake.trim() === ""){
            setCakes(cakesStatic);
        } else{
            const filteredCakes = cakes.filter(cake => 
                cake.cakeName.toLowerCase().includes(searchCake.toLowerCase())
            ); 
            setCakes(filteredCakes);         
        }
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        filterCakes(searchCake); 

    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="search-field">Search for a cake:</label>
            <input type="text" id="search-field" placeholder='Search for a cake' value={searchCake} onChange={(e) => setSearchCake(e.target.value)}/>
            <input type="submit"/>
        </form>
    )

}

export default Search;