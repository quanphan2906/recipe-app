import React, { useState, useEffect } from "react"
import axios from "axios"

const appId = "b0777b7a";
const appKey = "cbe3c1efceb1fd81cfa5d26f06f2ad01";
const apiUrl = `https://api.edamam.com/search?q=q=fish&app_id=${appId}&app_key=${appKey}`; 

function Home() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios(apiUrl).then(({data}) => {
            console.log(data.hits);
            setRecipes(data.hits);
        }) 
    })

    // const recipeList = recipes.length !== 0 ? (
    //     recipes.map(recipe => {
    //         console.log(recipe);
    //         return (
    //             <div key={recipe.uri}>
    //                 {recipe.image}
    //             </div>
    //         )
    //     })
    // ) : (
    //     <div>Fetching recipes...</div>
    // )

    return (
        <div>
            {/* {recipeList} */}
        </div>
    )
}

export default Home
