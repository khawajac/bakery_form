import CakeForm from './CakeForm';
import './App.css';
const RecipeList = ({cakes, setCakes}) => {
    return (
        <>
            <section className='cake-list'>
                {
                    cakes.map((cake, index) => {
                        return(
                            <div className="cake-item" key={index}>
                                <div className='cake-box'>
                                <h3>{cake.cakeName}</h3>
                                <ul>
                                    {cake.ingredients.map((ingredient, index) => {
                                        return(
                                            <li key={index}>{ingredient}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                            </div>
                        )
                    })
                }
            </section>
            <section>
                <h4>Average cake rating: </h4>
                <p> {(cakes.reduce((total, cake) => total + cake.rating, 0) / cakes.length)}   🥐</p>
            </section>
        </>
    )

}

export default RecipeList;