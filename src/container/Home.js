import React, { Component } from "react"
import {Link} from "react-router-dom"

import {get} from "../controller/render"

const appId = "b0777b7a";
const appKey = "cbe3c1efceb1fd81cfa5d26f06f2ad01";
const apiUrl = `https://api.edamam.com/search?q=q=fish&app_id=${appId}&app_key=${appKey}&from=0&to=3`;

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            recipes: []
        }
    }

    async componentDidMount() {
        let data = await get(apiUrl);
        this.props.changeSelected(null);
        this.setState({
            recipes: [ ...this.state.recipes, ...data.hits]
        })
    }

    render() {
        const recipes = this.state.recipes.map(recipe => {
            return recipe.recipe
        })

        const recipeList = recipes.length !== 0 ? (
            recipes.map(recipe => {
                return (
                    <div key={recipe.uri}>
                        <Link 
                            to={"/recipes/" + recipe.label}
                            onClick={() => {this.props.changeSelected(recipe)}} 
                        > {recipe.label}
                        </Link>
                    </div>
                )
            })
        ) : (
            <div>Fetching recipes...</div>
        )

        return (
            <div>
                {recipeList}
            </div>
        )
    }
}
