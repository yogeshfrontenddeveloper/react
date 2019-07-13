import React from "react";

import { Link } from "react-router-dom";

const Recipe = props => {
  return (
    <div className="container">
      <div className="row">
        {props.recipes.map(recipes => {
          return (
            <div
              key={recipes.recipe_id}
              className="col-md-4"
              style={{ marginBottom: "2rem" }}
            >
              <div className="recipes__box ">
                <img
                  className="recipes__box-img"
                  src={recipes.image_url}
                  alt={recipes.title}
                />
                <div className="recipe__text">
                  <h5 className="recipes__title">
                    {recipes.title.length < 20
                      ? `${recipes.title}`
                      : `${recipes.title.substring(0, 25)}...`}
                  </h5>
                  <p className="recipes__subtitle ">
                    Publisher: <span>{recipes.publisher}</span>
                  </p>
                  <button className="recipe_buttons">
                    <Link
                      to={{
                        pathname: `/RecipesDetails/${recipes.recipe_id}`,
                        state: { recipe: recipes.title }
                      }}
                    >
                      view recipe
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            // <div key={recipes.recipe_id}>
            //   <img src={recipes.image_url} alt={recipes.title} />
            //   <p>{recipes.title}</p>
            // </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recipe;
