# cs628-PE-Vishal
# PE02 – Movie List React App

This React application displays a list of movies and allows users to filter them by genre. It is built using functional components and React hooks (`useState`), following the Input-Process-Output model described below.

# Input

The program accepts two primary forms of input. The first is the static movie dataset defined inside the `MovieList` component as an array of objects, where each object contains three properties: `title`, `genre`, and `releaseYear`. The second form of input is user interaction through the browser interface. The user can select a genre from a dropdown menu (`<select>` element), which triggers an `onChange` event. The user can also click on any movie card, which triggers an `onClick` event. Both events feed data into the component's state and event handlers.

# Process

When the application loads, React renders the `MovieList` component and initializes the `selectedGenre` state to `"All Genres"` using the `useState` hook. The program dynamically builds a list of unique genres from the movie array using JavaScript's `Set` object. When the user selects a genre from the dropdown, the `onChange` handler updates the `selectedGenre` state, causing React to re-render the component. During re-rendering, the movie array is filtered: if the selected genre is `"All Genres"`, all movies are kept; otherwise, only movies matching the chosen genre remain. When the user clicks a movie card, the `handleMovieClick` function is invoked, which calls the browser's `alert()` function with the movie's title.

# Output

The output is rendered as JSX in the browser. The page displays a heading, a genre dropdown populated with unique genre options, and a list of movie cards. Each card shows the movie's title, genre, and release year, styled using `MovieList.css`. When a genre is selected, the displayed list updates immediately to show only matching movies. When a movie card is clicked, an alert dialog appears on screen with the message `You clicked on "<movie title>"`, confirming the user's selection.
