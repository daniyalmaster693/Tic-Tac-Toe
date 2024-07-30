# Tic-Tac-Toe

A tic tac toe game made using HTML, CSS, and Javascript. The app uses a clean and simple UI, and has support for two players.

<h2> Outcome </h2>

<img src="https://i.imgur.com/MpRVTNn.png" alt="The image of the solution to the challenge">

<h2> Links </h2>

<li> Link to task: https://www.theodinproject.com/lessons/node-path-javascript-tic-tac-toe </li>
<li> Link to live demo: https://daniyalmaster693-tic-tac-toe.vercel.app </li>

<h2> What have I learned </h2>

<li> I've learned how to use keyframes to create unique animations </li>
<li> I've applied Closures to this project </li>
<li> I've applied Module Patterns to this project </li>
<li> I've applied Factory Functions to this project  </li>
<li> I've applied IIFEs to this project </li>
<li> Learned about the pointer events CSS style </li>

<h2> Keyboard Controls </h2>

<li> Key "Escape": Hide Modal </li>

<h2> How did I complete this project? </h2>

<p> I started by creating all the HTML elements and assigning them classes. I declared my CSS custom properties for things like colors, transitions, scale animations, other common values. I began removing default styles such as margin and padding on the body, and then added a min height, background color, and a font-family. I began working on creating the start page for the game. I used properties such as line height and margins to create the logo I wanted. I designed by start game button, and used some basic Javascript to allow it to reveal the gameboard. I spent a bit of time learning about keyframes, and created one that would allow the scale and opacity to change from 0 to 1. This created a smooth and seamless transition between the start page and game. Next, I began creating the board. I CSS Grid to create the layout of buttons and flexbox for the scores. Then, I designed the modal and modal overlay which would be shown when the outcome of a game was decided. I utilized the custom properties to design my elements, and brought my focus to now creating the actual game. I created gameDisplayBoard which would apply concepts I've learned in lessons. I used it as an IIFE which would allow it to immediately run, which is important considering it would hold almost all the code for the game. In addition, I used a module pattern, as I returned every method inside the IIFE, which would allow it to be accessed outside of it. This was important for allowing event listeners to connect functions to DOM elements. Now, I began declaring some basic elements of the game such as the board, players, methods such as getBoard () and setBoard(). Next, I began working on creating a function to display player markers on a square, when it was clicked. I created and if statement and utilized index, in order to only show the marker on the square that was clicked. Now, I declared some variables inside the the IIFE, which could be improved, but is still better then creating them as global variables. Now, I began creating my function that would determine outcomes of the game. I spent some time using console.logs which allowed me to realize that it made sense to make the winning combinations, indexes that a certain marker would need to be placed on, in order tow in. I applied this, to the function, and used if statements, and a for each loop, to create the functionality I wanted. Lastly, I created some basic functions such as hiding and showing the modal, and resetting the game. I added my event listeners and spent some time testing the game and fixing issues as I found them. Once I finished, I tested the website on multiple browsers, added some responsive design using media queries, and used the built-in device size emulation feature to view what the website would look like on different devices.  </p>
