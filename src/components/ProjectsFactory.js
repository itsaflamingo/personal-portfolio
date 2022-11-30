import battleshipImg from '../images/battleship.png'
import shopping from '../images/shopping.png'
import weather from '../images/weather.png'
import waldo from '../images/wheres-waldo.png'

function ProjectsFactory(name, description, projectLink, ghRepoLink, id, img) {

    return {
        name,
        description,
        projectLink,
        ghRepoLink,
        id,
        img
    }

}

const wheresWaldo = () => {
    return ProjectsFactory(
        "Where's Waldo",
        "A re-creation of the classic 'Where's Waldo' using React, CSS, JSX and JavaScript in the front end, and Firebase in the back-end to store character locations as well as leaderboard information. The tests were written using the React Testing Library.",
        'https://itsaflamingo.github.io/wheres-waldo/',
        'https://github.com/itsaflamingo/wheres-waldo',
        1,
        waldo
    )
}

const battleship = () => {
    return ProjectsFactory(
        'Battleship',
        'This is a re-making of the game "Battleship". It was made using HTML, CSS, vanilla JavaScript, Webpack bundler and tested using Jest Testing Library. Click below for more information, or to play the game.',
        'https://itsaflamingo.github.io/battleship/',
        'https://github.com/itsaflamingo/battleship',
        2,
        battleshipImg
    )
}

const shoppingCart = () => {
    return ProjectsFactory(
        'Shopping Cart',
        'A fake shopping website made using React, JavaScript and tested using the React Testing Library. The products were taken from Fake Store API. Click below for more information, or to check out the website.',
        'https://itsaflamingo.github.io/shopping-cart/',
        'https://github.com/itsaflamingo/shopping-cart/tree/main',
        3,
        shopping
    )
}

const weatherApp = () => {
    return ProjectsFactory(
        'Weather App',
        "Displays the weather for any city typed into the search bar. The UI background and font color changes based on the city's weather. Weather information was retrieved from OpenWeatherMap API. The app was created using JavaScript, HTML and CSS. Click below for more information, or to check out the website.",
        'https://itsaflamingo.github.io/weather-app/',
        'https://github.com/itsaflamingo/weather-app',
        4,
        weather
    )
}

const projects = [ wheresWaldo(), battleship(), shoppingCart(), weatherApp() ]

export default projects;