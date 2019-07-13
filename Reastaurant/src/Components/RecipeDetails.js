import React, { Component } from "react";

import { Link } from "react-router-dom";

class RecipeDetails extends Component {
  state = {
    activeRecipe: []
  };

  componentDidMount = async () => {
    const title = this.props.location.state.recipe;

    const request = await fetch(
      `https://cors-anywhere.herokuapp.com/http://www.food2fork.com/api/search?key=dc8c2a4d8ae538971125b8d6a5f16dd3&q=${title}`
    );

    const respond = await request.json();
    this.setState({ activeRecipe: respond.recipes[0] });
    // console.log(respond.recipes[0]);
    console.log(this.state.activeRecipe);
  };
  render() {
    console.log(this.props);
    const recipe = this.state.activeRecipe;
    return (
      <div className="container">
        {this.state.activeRecipe.length !== 0 && (
          <div className="active-recipe">
            <img
              className="active-recipe__img"
              src={recipe.image_url}
              alt={recipe.title}
            />
            <h3 className="active-recipe__title">{recipe.title}</h3>
            <h4 className="active-recipe__publisher">
              publisher :<span>{recipe.publisher} </span>
            </h4>
            <p className="active-recipe__website">
              website:
              <span>
                <a href={recipe.publisher_url} target="_blank">
                  {recipe.publisher_url}
                </a>
              </span>
            </p>

            <button className="active-recipe__button ">
              <Link to="/">Go home</Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default RecipeDetails;
