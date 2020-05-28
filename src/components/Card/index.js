import React from "react";
import "./style.css";
import weatherEats from './images/weatherEats-04.png';
import bookshelf from './images/bookshelf.png';

function Card() {
    return(
        <div>
            <div className="card cardsizing">
                <img src={weatherEats} class="card-img-top" alt="WeatherEats App" />
                <div className="card-body">
                    <h5 className="card-title">WeatherEats</h5>
                    <p className="card-text">WeatherEats app accepts city name as the user input and based on the temperature it suggest a meal recipe.weatherEats will help users from around the world get some new ideas for recipes that are suited to their climate. This app provides the Youtube link and a recipe guide for the suggested menu.</p>
                    <a href="https://cbruder1292.github.io/Project1/" target="_blank" class="btn btn-primary">Click here to open application</a>
                </div>
            </div>
            <div className="card cardsizing">
                <img src={bookshelf} class="card-img-top" alt="WeatherEats App" />
                <div className="card-body">
                    <h5 className="card-title">Bookshelf</h5>
                    <p className="card-text">User can create profile in Bookshelf application, where the user can search for different books by keyword, add books to a reading wish-list and keep track of the books.</p>
                    <a href="https://fierce-caverns-99313.herokuapp.com/" target="_blank" class="btn btn-primary">Click here to open application</a>
                </div>
            </div>
        </div>
    )
}

export default Card;