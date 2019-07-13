import React, { Component } from "react";
import "./App.css";

import Form from "./Components/Form";
import Recipe from "./Components/Recipe";

const API_KEY = "dc8c2a4d8ae538971125b8d6a5f16dd3 ";
class App extends Component {
  // getRecipe = async e => {
  //   const recipeName = e.target.elements.recipeName.value;
  //   e.preventDefault();
  //   const api_call = await fetch(
  //     `https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${Apikey}&q=shredded%20chicken&count=5`
  //   );
  //   const data = await api_call.json();
  //   console.log(data);
  // };
  state = {
    recipes: []
  };

  getRecipe = async e => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    // const api_call = await fetch(
    //   `https://cors-anywhere.herokuapp.com/http://www.food2fork.com/api/search?key=dc8c2a4d8ae538971125b8d6a5f16dd3&q=shredded%20chicken&count=5`
    // );
    const api_call = await fetch(
      `https://cors-anywhere.herokuapp.com/http://www.food2fork.com/api/search?key=dc8c2a4d8ae538971125b8d6a5f16dd3&q=${recipeName}&count=12`
    );

    const data = await api_call.json();

    this.setState({ recipes: data.recipes });
    // console.log(data.recipes[1]);
    console.log(this.state.recipes);
  };

  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes });
  };
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe APP</h1>
        </header>
        <Form getRecipe={this.getRecipe} />

        <Recipe recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
