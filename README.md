# Monster Matching

[My Notes](notes.md)

Put your memory to the test and see what monsters you can match!



## 🚀 Specification Deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Everyone's played the classic memory matching game. This is a fun, new twist. Play online against your friends to see who can remember the most monsters. Keep your brain sharp and have a blast competing in this friendly competition.

### Design

Here is a picture that shows the different screens that the game will have. 
![Design image](ui_design.JPG)

```mermaid
sequenceDiagram
    actor Player 1
    actor Player 2
    participant Website
    Player 1->>Website: Flips 2 Cards
    Website->>Player 2: Display Cards
    Player 1 ->>Website: Scores or not
    Website ->> Player 1: Display scores
    Website ->> Player 2: Display scores
```

### Key features

- Secure login
- Ability to choose an opponent
- Fun, interactive memory game
- Ability to play against an opponent in real time
- Record from each game played displayed

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - This will be the basic structure of the website. There will be 4 HTML pages. One for login, one for opponent selection, one for the game, and one for viewing the records.
- **CSS** - This will be used to make the website nice and pretty. There will be nice colors, spacing, formatting, and ensuring that it looks good on multiple screen sizes. 
- **React** - This is how I will make the game interactive, enabling users to flip cards. It will also keep track of the scores. 
- **Service** - This is how the website will save the game results and send information between the players. 
- **DB/Login** - This will store the user accounts and information such as scores. When users login, their scores will be saved so that they can view them later.
- **WebSocket** - Enable 2 browsers to talk to each other through the server, this will enable two people to play together at the same time.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Server deployed and accessible with custom domain name** - [My server link](https://https://brooklyn-jones.click/).

My Public IPv4 address is 44.207.82.135

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages** - Added a home page, opponents page, players page, and scrores page
- [x] **Proper HTML element usage** - I used a wide variety of elements including bodys, headers, footers, <hr> for line, <br> for spaces, spans, ps, hrefs, and other types for texts. There are also tables and lists to display information. 
- [x] **Links** - I did not complete this part of the deliverable. The headers have links to each page, and when you choose an opponent it takes you to the play page. 
- [x] **Text** - There is clear text to explain what everything does. There are headers and footers, and text displaying opponents. 
- [x] **3rd party API placeholder** - I used a third party api to randomly generate a new monster image each time the page is reloaded. The monster will show up in the tab. 
- [x] **Images** - The monster from the api is an image. There is also a table of pink boxes that represent the cards to flip over. 
- [x] **Login placeholder** - There is a login text box and a submit button.
- [x] **DB data placeholder** - The Opponents page has placeholders where all of the active opponents will be displayed. 
- [x] **WebSocket placeholder** - Placeholder for the two different players playing at the same time. It will switch back and forth between whos turn it is. 

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Visually appealing colors and layout. No overflowing elements.** - It took a lot to get all of the sqaures in one place, it is helpful to add a media option for when people will use it on their phones. 
- [x] **Use of a CSS framework** - I used Bootstrap to do things like format my table and containers
- [x] **All visual elements styled using CSS** - I have a css file that creates the visual elements. All elements have tags, ids, or classes that tell it what style to use. 
- [x] **Responsive to window resizing using flexbox and/or grid display** - I use flex to make sure that my elements are sized well, and to put things in columns. I tried to use grid on my game board itself but everything was getting messed up so I decided to keep that a table. 
- [x] **Use of a imported font** - I imported the "Inter" font from google and use it for a lot of the text
- [x] **Use of different types of selectors including element, class, ID, and pseudo selectors** - I use many different selectors. Lots of elements, like body, menu, footer, table, buttion, headers, lists, etc. Then there are different classes like my square and containers. There are id's for things like my players. The pseudos are things like hover that I use on the buttons, and active to see if the object is being used

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Bundled using Vite** - vite let me use npm run dev so it made the website live connected to vscode. 
- [x] **Components** - I still have html and css code, but each page now has a jsx file so that the main page(header and footer) stay the same but the main part changes out.
- [x] **Router** - I use a browser router so that the index page connects to all of the other components and just replaces the main. 

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **All functionality implemented or mocked out** - Yep! This is a fully functioning game! You can log in, log out, choose an opponent using setInterval, and play a matching game(against yourself, for now)! Usernames are stored in local storage and are transfered across pages so that you know who is playing.
- [x] **Hooks** - I use useState and useEffect a ton. useState was used a lot when I was declaring variables so that it can remember variables each time it is re-rendered. useEffect is great for initializing my game or ending it whenever all of the cards are matched. This is all shown a ton on the play page, play.jsx. 

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Node.js/Express HTTP service** - I have a backend server that uses express! The server listens on a local host
- [x] **Static middleware for frontend** - Yep! I use the express middleware and cookie parser. 
- [x] **Calls to third party endpoints** - Calls a 3rd party endpoint to add a quote to the scores page
- [x] **Backend service endpoints** - This is all of my create user, login, logout, scores, etc. Anything that is a /api. 
- [x] **Frontend calls service endpoints** - There are many pages that call the service endpoints, like play saving the scores and the scores page getting them and displaying them all. 
- [x] **Supports registration, login, logout, and restricted endpoint** - I have endpoints that complete these all, and you need to be logged in in order to access the scores.

## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
