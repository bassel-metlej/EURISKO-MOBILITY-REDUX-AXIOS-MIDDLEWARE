Eurisko mobility code challenge 

Technologies used: react js , redux, axios middleware , Material-ui

To Run the project: 
Download the code and open it in the terminal then write (yarn install or npm install) to download the 
(node module). write (yarn start or npm start) to run the code.


To login: 
-Enter the username: candidate and the password: P@wss0rd
-Click the button (a circular progress will appear before moving to the dashboard)

Login error case:
-When the username or password is wrong
-When you don't have a connection 
A popup should appear to you contain the type of errors.

Dashboard:
On the dashboard page you can see a cards contain an articles data from the API, and at any time you reached the end of the articles list,a circullar progress loading should appeard and see more articles.
You can do a search based on the title or the content, you cant load more articles when you reached the end of the article list if the search input is not empty, and you should see a popup contain ("You can get more data only when the search input is empty!").

Then you have a sign out button redirect you to the login page after click on it.
