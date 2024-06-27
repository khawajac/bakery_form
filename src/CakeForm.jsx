import { useState } from "react";

const CakeForm = ({cakes, setCakes}) => {
    const [cakeName, setCakeName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [rating, setRating] = useState(''); //maybe a number?
    const [error, setError] = useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!cakeName || !ingredients || !rating){
            return setError('Please fill in all cake information');
        }

        const newCake = {cakeName, ingredients, rating}
        setCakes([newCake, ... cakes]);
    };


    //string.split gives an array 

    return (
        <form onSubmit={handleSubmit}>
            <p className="error-message">{error}</p>
            <label htmlFor="name" >Cake Name:</label>
            <input type="text" id="name" placeholder="Name" value={cakeName} onChange={(e) => setCakeName(e.target.value)}/>
            <label htmlFor="ingredients">Ingredients:</label>
            <textarea cols="30" rows="1" id="ingredients" placeholder="Separate ingredients with comma's" value={ingredients} onChange={(e) => setIngredients(e.target.value.split(','))}></textarea>
            <label htmlFor="rating">Rating:</label>
            <input type="number" id="rating" min={1} max={5} placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)}/>
            <input type="submit" value='Submit'/>
        </form>
    )

}

export default CakeForm;